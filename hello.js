const http = require('http');
http.createServer((reg,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello, world!\n');
    res.end();
}).listen(1337);