// var express = require("express");
// var app = express();

// var path = require("path");

// var HTTP_PORT = process.env.PORT || 8090;

// // setup the static folder 
// app.use(express.static("public")); 

// // handle "404" errors
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// // Start the server
// app.listen(HTTP_PORT, function(){
//     console.log("Server listening on port: " + HTTP_PORT);
// });

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});app.listen(port);