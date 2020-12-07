const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",function(req, res){
    res.sendFile(__dirname +"/views/index.html")
})

app.get("/newsletter", function(req,res){
    res.sendFile(__dirname + "/views/newsletter.html" )
})

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/loggin", function(req,res){
    res.sendFile(__dirname + "/views/loggin.html")
})

app.listen(3000, function(){
    console.log("Para ver el sitio ingresar en localhost:3000");
})

console.log(app);