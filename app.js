// import express

// const app = require("express")();

//Alternative way of doing it.

//library object
const express = require("express");
//server instance
const app = express();

//Make the app use json express options for converting request body
app.use(express.json());

//(endpoint, callback function)
//req - request, res - response



app.get("/", (req,res) => {
    res.send({ message:"Welcome." });
});

app.get("/about", (req,res) => {
    res.send(
        { port:"8080.",
            name:"myServer",
            dateCreated:"Today"
        });
});

app.post("/",(req,res)=>{
    //req.body - here is the object.
    res.send(req.body);
});

app.post("/opinion",(req,res)=>{
    if(req.body.opinion==="I like it"){
        res.send({message:"good"})
    }else{
        res.send({message: "Fuck you"})
    }
});

app.listen(8080, ()=>{
    console.log("Server is running")
});