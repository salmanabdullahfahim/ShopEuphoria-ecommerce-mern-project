const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan());

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api is working properly",
  });
});

app.listen(5001, () => {
  console.log(`server is running on port 5001`);
});
