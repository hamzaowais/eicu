var ReportsModel = require('../models/ReportsModel.js');
var async = require('async');


module.exports = {
	getReport: function(inputdata, callback) {
		try {

			var where = inputdata;
			// get query from mySQL query
			//get data from the database and send

			ReportsModel.getQuery(where, function(err, results) {
				if (err) {
					return callback(err);
				}

				if (results.length > 0) {
					if (results[0].TYPE != 3) {
						sql_query = results[0].SQL_QUERY;
						report_params = JSON.parse(results[0].REPORT_PARAM);

						var conditions = [];
						Object.keys(where).forEach(function(key) {
							if (key != 'REPORT_ID' && where[key].length > 0) {
								conditions.push(key);
							}
						});
						var flag = 0;
						var where_claues = '';
						if (conditions.length > 0) {
							conditions.forEach(function(key) {
								if (flag == 0) {
									flag = 1;
									where_claues = where_claues + ' where'
									sql_query = sql_query + ' where';
								} else {
									sql_query = sql_query + ' and';
									where_claues = where_claues + ' and'
								}
								if (report_params[key].OPERATOR === 'LIKE') {
									//todo trim the where[key] before checkoint
									sql_query = sql_query + " " + key + " LIKE '%" + where[key] + "%'";
									where_claues = where_claues + " " + key + " LIKE '%" + where[key] + "%'"
								}
								if (report_params[key].OPERATOR === 'EQUAL') {
									//todo trim the where[key] before checkoint
									sql_query = sql_query + " " + key + " = " + where[key] + " ";
									where_claues = where_claues + " " + key + "=" + where[key] + " "
								}
							})
						}
						if (results[0].TYPE == 1) {
							results[0].SQL_QUERY = sql_query;
							sql_query = sql_query + ' limit 20000';

						} else {
							results[0].SQL_QUERY = results[0].SQL_QUERY.replace("l?l", where_claues);
						}

						ReportsModel.getReport(results[0], function(err, resultsReport) {
							if (err) {
								callback(err);
								return;
							}
							var res = {};


							res.name = results[0].REPORT_NAME;
							res.description = results[0].DESCRIPTION;
							if (results[0].REPORT_PARAM == null) {
								res.params = {};
							} else {

								res.params = JSON.parse(results[0].REPORT_PARAM);
							}

							res.data = resultsReport;


							return callback(null, res);
						})
					} else {
						eval(results[0].SQL_QUERY);
					}
				} else {
					var error = "No Report found with this provided report id";
					return callback(error);
				}


			});

		} catch (e) {
			return callback(e);
		}

	},
	getReportParam: function(inputdata, callback) {
		try {
			var where = inputdata;
			// get query from mySQL query
			//get data from the database and send

			ReportsModel.getReportParam(where, function(err, results) {
				if (err) {
					return callback(err);
				}
				if (results.length == 0) {
					return callback(new Error('Report ID not found'));
				}

				output = {};

				if (results[0].REPORT_PARAM != null) {
					output = results[0].SQL_PARAM;

				}
				return callback(null, output);
			});

		} catch (e) {
			return callback(e);
		}
	}
}