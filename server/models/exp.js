const mongoose = require("mongoose");
const validator = require("validator");

const expsch = new mongoose.Schema({
  s_id: {
    type: String,
    required: true,
  },
  c_name: {
    type: String,
    required: [true, "Please enter valid company name"],
  },
  created_at: { type: Date, default: Date.now },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("experience", expsch);
