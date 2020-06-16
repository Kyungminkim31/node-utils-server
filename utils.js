'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var os = require('os');

var app = express();

var cors = require('cors');

// 정적페이지 불러오기를 위한 설정
app.use('/', express.static(path.join(__dirname,'public')));

// CORS 설정을 위한 설정
app.use(cors());

app.set('port', process.env.PORT || 8885);

app.get('/', function(req, res){
    console.log('get - root');
});

app.post('/base64/', function(req, res){
    console.log('post - base64');
    res.sendFile(path.join(__dirname + '/public/base64.html'));
});

app.get('/base64/', function(req, res){
    console.log('get - base64');
    res.sendFile(path.join(__dirname + '/public/base64.html'));
});

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

var server = app.listen(app.get('port'), function(){
    console.log('Express started on this server!' +
        app.get('port') +
        '; press Ctrl - C to terminate');
});
