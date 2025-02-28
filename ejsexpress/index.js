const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/hello",(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})

app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval})
})


//instagram ejs template
app.get("/ig/:username",(req,res)=>{
    const followers = ["sabira_123","ankushkumarvats","bob","shradhhakhapra","laxmikant"]
    let {username}= req.params;
    res.render("instagram.ejs",{username,followers})
})
