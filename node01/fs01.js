var http=require('http');
var fs=require('fs');
var readTxt=function(req,res){
	// res.setHeader('Content-Type','text/plain;charset=utf-8');
    // var content= fs.readFileSync('./1.txt','utf-8');
    // res.writeHead({'Content-Type':'text/html'});
    // res.writeHead({'Content-Type':'text/plain'});
    // var content= fs.readFileSync('11.txt','utf8');

    // console.log(content)
   // res.write(content)
   // res.end(content);
   fs.readFile('11.txt','utf8',function(err,data){
     	console.log(data)
     	res.end(data);
     })
   // res.end(content);
}
var server=http.createServer(readTxt);
server.listen('8080');