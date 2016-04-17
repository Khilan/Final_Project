/*var express = require("express");
var app = express(); */

/*
app.use('/', function(req,res)
{
    res.send('Hello World');
}); */

/*
app.get('/', function(req,res)
{
res.send('This is GET request');    
})

app.post('/', function(req,res)
{
res.send('This is POST request');    
}) */

/*
app.route('/').get(function(req,res){
    res.send('This is GET request using middle ware');
}).post(function(req,res){
    res.send('This is POST request');
}) */

/*
var hashName = function(req,res,next) {
    if(req.param('name')){
        next();
    }
    else{
        res.send('What is your name?');
    }
};

var sayHello = function(req,res,next){
    res.send('Hello ' + req.param('name'));
}; */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express.js');
    passport = require('./config/passport');
    
var db = mongoose();    
var app = express();
var passport = passport();

app.listen(3000);

console.log('Server is Running at http://localhost:3000');