//console.log("hello world");

// var server=http.createServer((require, response)=>{
//     response.writeHead(200,{'content-Type':'text/plain'});
//     response.end('Hello World')

// }).listen(8080);
// console.log('server running at http://127.0.0.1:8080/')


var http = require("http");

var server=http.createServer((req, res)=>{
    if(req.method === "GET"){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end("Kerkesa e tipit GET eshte pranuar");
    }
    else if (req.method === "POST"){
        let body = '';
         
        req.on('data', chunk =>{
            body += chunk.toString();
        });

        req.on('end',() => {
            console.log(`te dhenat e pranuara jan ${body}`);
            res.writeHead(200,{'content-Type':'text/plain'});
            res.end("Kerkesa e tipit GET eshte pranuar");
        });
    }
})
server.listen(8080,() =>{
    console.log('server running at http://127.0.0.1:8080/')
})