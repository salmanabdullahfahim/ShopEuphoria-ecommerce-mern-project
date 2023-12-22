require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUrl =
  process.env.MONGODB_URL || "mongodb://localhost:27017/shopEuphoriaDB";

const defaultImagePath =
  process.env.DEFAULT_IMAGE_PATH || "../public/images/default.jpg";

module.exports = { serverPort, mongodbUrl, defaultImagePath };
