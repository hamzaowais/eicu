exports.Index = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Hello World';
    response.end(JSON.stringify(response.pageInfo));
    // response.send(response);
    console.log(response);
};

exports.Other = function(request, response){
    response.pageInfo = {};
    response.pageInfo.title = 'Other';
    response.render('home/Other', response.pageInfo);
};