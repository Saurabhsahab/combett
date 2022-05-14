const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/combett")
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("connection Failed");
  });
