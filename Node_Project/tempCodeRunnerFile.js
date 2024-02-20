const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        req.readableEnded('hello worlld !')
    }else{
        res.end("you are typing to hit a erong url")
    }