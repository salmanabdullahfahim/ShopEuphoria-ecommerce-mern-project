const createError = require("http-errors");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const findItemById = async (id, options) => {
  try {
    const item = await User.findById(id, options);
    if (!item) throw createError(404, "No Item exist with this id");

    return item;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createError(400, "Invalid Item id");
    }
    throw error;
  }
};

module.exports = { findItemById };
