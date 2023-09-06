const createError = require("http-errors");
const users = require("../models/userModel");

const getUsers = (req, res, next) => {
  try {
    res.status(200).send({
      message: "User is returned successfully",
      users: users,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers };
