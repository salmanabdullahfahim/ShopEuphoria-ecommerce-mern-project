const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = false;
  if (login) {
    next();
  } else {
    res.status(401).json({ message: "You must be logged in" });
  }
};

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Api is working",
  });
});

app.get("/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "User profile is here",
  });
});

//client error handler
app.use((req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
