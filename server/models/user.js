const mongoose = require("mongoose");
const validator = require("validator");

const usersch = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Email is Invalid");
      }
    },
  },
  batch: {
    type: String,
    required: true,
  },
  pf_img: {
    type: String,
    required: true,
    unique: true,
  },
  present_company: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  gh_link: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("user", usersch);
