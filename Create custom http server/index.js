const http = require('http');

const port = 8010;

const server =http.createServer((req,res)=>{
    let url = req.url;
    if(url === '/'){
        res.write('welcome to the home page !!');
        res.end();
    }
    else if (url === '/about') {
        res.write('welcome to the about page !!');
        res.end();        
    }
    else if(url === '/contact'){
        res.write('welcome to the contact page !!');
        res.end();
    }
    else{
        res.writeHead(404);
        res.write('404 page not found !!');
        res.end();
    }
});

server.listen(port,(err)=>{
    if(err){
        console.log('server is not started !!');
    }
    console.log(`server is successfully started !!`);
})