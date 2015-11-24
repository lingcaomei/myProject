
var http = require('http');
var fs=require('fs');

  http.createServer(function (req,res){

　　　　  res.writeHead(200, {'Content-Type':'text/html'});

         res.write('<h1>Node.js</h1>');

         

         fs.readFile('demo.txt',function(err,data){
         	console.log(data)
         	res.end(data);
         })
         
 }).listen(3000);

console.log("HTTP server is listening at port 3000");