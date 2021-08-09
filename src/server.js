"use strict";

//requiers
const express = require("express");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("The server is working (^_^))");
});

app.get("/person", validator, (req, res) => {
  const name = req.query.name;
  res.json({
    name:name
  });
});

app.post('/bad', (req,res)=> {
  let number = 12;
  number.forEach(x=> console.log(x));
  res.send('this Bad Route ');
})


app.use("*", notFoundHandler);
app.use(errorHandler);

// start port
const start = (port) => {
  app.listen(port, () => console.log("the server is working in port = ", port));
};


// exports
module.exports={
    app:app,
    start:start
};
