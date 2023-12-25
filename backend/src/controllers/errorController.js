const errorResponse = (res, { statusCode = 500, message = "" }) => {
  return res.status(statusCode).json({ success: false, message: message });
};

module.exports = { errorResponse };
