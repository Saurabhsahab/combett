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
    default: "",
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
  skills: {
    type: Array,
  },
  pf_img: {
    type: String,
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
