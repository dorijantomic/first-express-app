
 const express = require('express')
 
 const app = express()
// use allows us to add a new middleware function that runs on each request
app.use((req,res,next) => {
    console.log('In the Middleware!')
    next() // allows the next Middleware to be executed
})
app.use((req,res,next) => {
    console.log('In another Middleware!')
    res.send(`<h1> Hello From Express </h1>`)
})
app.listen(3000) // creates a server and listens for requests 