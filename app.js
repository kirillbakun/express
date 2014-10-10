var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');

var favicon = require('static-favicon');
var cookie_parser = require('cookie-parser');
var body_parser = require('body-parser');
var log = require('libraries/log')(module);

var app = express();
app.set('port', config.get('port'));

app.set('views', __dirname + '/views');
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);

app.use(favicon());
//app.use(logger('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded());
app.use(cookie_parser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.render('index', {
        test: 'test value'
    });
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express.loc listening port ' + app.get('port'));
});
