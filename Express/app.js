const express = require('express')
const fs = require('fs')

const data = fs.readFileSync("index.html", "utf-8");

const app = express()

app.get("/home" , (req,res)=>{
    // res.send("Welcome from Express")
    res.end(data) //or send 

})

const PORT = 3000
app.listen (PORT, ()=>{
    console.log("Server os running...")
})
//Client side entering/rendering:-
//Server side entering/rendering:- 
//Single page rendering:- all content is rendered on single page