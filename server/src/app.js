const express = require("express");
const morgan = require("morgan");
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

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
  res.status(404).json({ message: "route not found" });
  next();
});
// server error handling
app.use((err, req, res, next) => {
  console.log(err.status);
  res.status(500).json({ message: "broke" });
});

module.exports = app;
