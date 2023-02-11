const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const addTasks = [];
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    let today = new Date();
    
    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("eng-US", options);

    res.render("list", {
        kindOfDay : day,
        newTask : addTasks
    });
});

app.post("/", (req, res) => {
    const addTask = req.body.task;
    addTasks.push(addTask);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`App running at ${port}.`);
});