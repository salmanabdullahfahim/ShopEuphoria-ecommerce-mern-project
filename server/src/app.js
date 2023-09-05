const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api is working properly",
  });
});
app.get("/api/user", (req, res) => {
  res.status(200).send({
    message: "User is returned successfully",
  });
});

//client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});
// server error handling
app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ success: false, message: err.message });
});

module.exports = app;
