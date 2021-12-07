const express = require("express");

const app = express();
const log = console.log;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(3000, function(){
    log("Console on 3000")
})
