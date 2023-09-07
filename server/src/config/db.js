const mongoose = require("mongoose");
const { mongoURL } = require("../secret");

const connectDB = async (options = {}) => {
  try {
    mongoose.connect(mongoURL, options);
    console.log("Connection to DB is established");

    mongoose.connection.on("error", (err) => {
      console.error("DB connection error: ", err);
    });
  } catch (err) {
    console.error("Could not connect to DB: ", err.toString());
  }
};

module.exports = connectDB;
