//import express from "express";
const path = require("path");
const express =  require("express");
const app = express();
const bodyParser = require("body-parser");
const notifier = require("node-notifier");
const port = process.env.port || 9000;

app.use(bodyParser.json());

app.get("/health", (req, res) => res.status(200).send());
app.post("/notify", (req, res) => {
    notify(req.body, reply => res.send(reply))
});
app.listen(port, () => console.log(`Server is up and running on port: ${port}`));


const notify = ({title, message}, cb) =>{
    //cb("some string")
    notifier.notify(
    {
        title: title || "Unknown title",
        message: message || "Unkown message", 
        icon: path.join(__dirname, "icon.png"),
        wait: true,
        sound: true,
        timeput: 10,
        reply: true,
        closeLabel: "Completed?"
    }, 

    (err, response, reply) =>{
        cb(reply)
    }
    )

}