const mongoose = require("mongoose");
const validator = require("validator");

const skillsch = new mongoose.Schema({
  s_id: {
    type: String,
    required: true,
  },
  skill_name: {
    type: String,
    required: [true, "Please enter valid skill name"],
  },
});

module.exports = mongoose.model("skill", skillsch);
