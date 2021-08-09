"use strict";

const loggerMiddleware = (req, res, next) => {
  console.log("Request Info", req.method, req.path);

  next();
};

module.exports = loggerMiddleware;
