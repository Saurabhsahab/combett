const mongoose = require("mongoose");

const db =
  "mongodb+srv://combetthelp:combetthelp@cluster0.gmqn8.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("connection Failed");
  });
