var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
  //app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));

  app.get('/', function(req, res, next) {
    res.status(200).sendFile("" + __dirname+'/dist/index.html'); 
  });

  app.listen(5000);

  console.log("Server started");

/*
  var express = require('express');

  var path = require('path');
  var bodyParser = require('body-parser');
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, 'dist')));

console.log("__dirname " , __dirname);

  app.get('/', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname+'/dist/index.html')); 
  });

  module.exports = app;

  app.listen(5000);*/
