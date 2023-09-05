const express = require("express");
const morgan = require("morgan");
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    return res.status(401).json({ message: "please login first" });
  }
};

//api
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api is working properly",
  });
});
app.get("/api/user", isLoggedIn, (req, res) => {
  console.log(req.body.id);
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
  res.status(500).json({ message: err.message });
});

app.listen(5001, () => {
  console.log(`server is running on port 5001`);
});
