const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Api is working",
  });
});

app.get("/user", (req, res) => {
  res.status(200).send({
    message: "User profile is here",
  });
});

//client error handler
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
  next();
});

//server error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "something broke" });
});

module.exports = app;
