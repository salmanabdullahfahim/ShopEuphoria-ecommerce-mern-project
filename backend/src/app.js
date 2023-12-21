const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");

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
  next(createError(404, "route not found"));
});

//server error handler
app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ success: false, message: err.message });
});

module.exports = app;
