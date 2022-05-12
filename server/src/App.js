const express = require("express");
const app = express();
require("../dbcoo");
const experience = require("../models/exp");
const skill = require("../models/skill");
const user = require("../models/user");
const port = process.env.PORT || 3000;
app.use(express.json());

// user endpoints

app.post("/user", async (req, res) => {
  try {
    const a = new user(req.body);
    const gg = await a.save();

    res.status(201).send(gg);
  } catch (e) {
    res.status(400).send(e);
  }
});

// skill endpoints

app.post("/skill", async (req, res) => {
  try {
    const a = new skill(req.body);
    const gg = await a.save();

    res.status(201).send(gg);
  } catch (e) {
    res.status(400).send(e);
  }
});

// experience endpoints

app.post("/experience", async (req, res) => {
  try {
    const a = new experience(req.body);
    const gg = await a.save();

    res.status(201).send(gg);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log("Server is working");
});
