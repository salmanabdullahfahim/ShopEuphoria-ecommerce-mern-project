require("dotenv").config();
const serverPort = process.env.PORT || 5002;
const mongoURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/shopEuphoriaDB";

module.exports = { serverPort, mongoURL };
