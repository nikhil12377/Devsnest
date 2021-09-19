const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.status(404).send("web page not found")
});

app.get('/products/:productID/name/:name', (req, res) => {
    console.log(req.query)
    res.send(req.params)
})

app.listen(5000);