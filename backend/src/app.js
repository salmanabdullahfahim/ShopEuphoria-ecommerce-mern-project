const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");

const app = express();

const rateLimiter = rateLimit({
  windowMS: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from this ip. Please try again later",
});

app.use(rateLimiter);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

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
