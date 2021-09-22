## Jade

> Installing Jade

```
npm i -s jade
```

## What is Jade ?

> It's html + variables

Jade is a template engine for Node.js. It uses whitespace and indentation as a part of the syntax.

[Jade Tutorial](https://www.tutorialsteacher.com/nodejs/jade-template-engine)

## Express - Generator

- provides boiler plate express-code

```
npx express-generator
npm install
SET DEBUG=<directory_name>:* & npm start
```

### res.sendfile :

sends file to front-end and it renders if it can be rendered by the browser

### res.download :

downloads the file

### res.render :

render the dynamic file with variable (used jade in current context)

# Code Samples :

```js
const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", (req, res) => {
  res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now() + 8 * 3600000),
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

app.listen(5000);
```
