const express = require("express");
const app = express();
const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'jade');
app.use('/download', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/hello.txt"), "test.txt");
    res.download(path.join(__dirname, "public/hello.txt"), "ello.txt")
});

app.listen(5000);