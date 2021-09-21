## Express Middleware :

Intermediate function used to check condition, if the condition is true then move to next function

## Topics :

- Middleware
- app.use
- how to access post data using middleware

## Sample Code :

```js
const express = require("express");
const app = express();
const checkAdmin = (req, res, next) => {
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(401);
    res.send();
  }
};
app.use(checkAdmin);
app.get("/", (req, res) => {
  res.send(req.query);
});
app.post("/", (req, res) => {
  res.send(req.body);
});
app.listen(5000);
```
