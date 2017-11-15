var HomeController = require('./controllers/HomeController');
var DataRoute = require('./routes/dataRoute.js');
var cors = require('cors')



// Routes
module.exports = function(app){
    
    // Main Routes
    app.use(cors());
    app.get('/getMimicData', DataRoute.getMimicData);
    app.get('/getInitialData', DataRoute.getInitialData);

    app.get('/safiatest', function(req, res){
    	var data={
    		safia:"isthebest"
    	}
    	return res.json(data)
    } )

    

};
