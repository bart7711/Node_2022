const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/public/weather.html")
})

app.listen(8080, () =>{
    console.log("Weather app has started.");
});