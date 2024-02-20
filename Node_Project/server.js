const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        req.end('hello worlld !')
    }else{
        res.end("you are typing to hit a erong url")
    }
})

server.listen(8000, ()=>{
    console.log("server is started")
})