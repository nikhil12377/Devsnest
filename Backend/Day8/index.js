const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const checkAdmin = (req, res, next) => {
    if (req.query.admin === 'true') {
        next();
    }
    else {
        res.status(401);
        res.send()
    }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(req.query)
});

app.post('/', (req, res) => {
    res.send(req.body)
})

app.listen(5000);