// Import the express package through the require() from node.js
//       easiest way to include modules in separate files 
const express = require('express');

//Iinitialise the express framework 
const app = express();

//Serve static files from the public folder:
// app.use(express.static('dist')); - Installing Parcel Debugging
app.use(express.static(__dirname + '/dist'));

// Use the get request 
// res = response > send a file from the public folder 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
   })

// Start the server, let the server listen out for port 8888
// This is all server side code 
let server = app.listen(8888, function(){
console.log("App server is running on port 8888");
});