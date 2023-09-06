const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const { rateLimit } = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 5,
  message: "Too many request with this ip. try again later",
});

//middleware
app.use(limiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user api
app.use("/api/user", userRouter);

//api
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api is working properly",
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
