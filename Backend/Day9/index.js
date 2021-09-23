const express = require("express");
const app = express();
const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/hello.txt"), "test.txt");
    res.download(path.join(__dirname, "public/hello.txt"), "ello.txt")
    res.render('index', { title: "Express" })
    res
        .status(201)
        .cookie("token", "test", {
            expires: new Date(Date.now() + 8 * 9600)
        })
        .cookie("hello", "hello")
        .redirect(404, "/admin")
});


app.listen(5000);