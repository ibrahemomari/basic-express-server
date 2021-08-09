"use strict";
const validator = (req, res, next) => {
  const name = req.query.name;
  if (name) {
    next();
  } else {
    next(`this query=${name} not valid`);
  }
};

module.exports = validator;
