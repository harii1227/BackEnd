const express = require("express")
console.log(typeof express) 

const app = express()


/**
 * see a request res cycle
 */
app.get("/", (req, res)=>{
    res.send("hello from the express server")
})

/**
 * starting the express server
 */

app.listen(8000, ()=>{
    console.log("server got started")
})