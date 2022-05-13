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

app.get("/user/:email", async (req, res) => {
  try {
    const a = await user.find({ email: req.params.email });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await user.findByIdAndUpdate(id, updatedData, options);
    res.status(204).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await user.findByIdAndDelete(id);
    res.status(200).send("User Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
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

app.get("/skill/:id", async (req, res) => {
  try {
    const a = await skill.find({ s_id: req.params.id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/skill/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await skill.findByIdAndUpdate(id, updatedData, options);
    res.status(204).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/skill/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await skill.findByIdAndDelete(id);
    res.status(200).send("Skill Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
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

app.get("/experience/:id", async (req, res) => {
  try {
    const a = await experience.find({ s_id: req.params.id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/experience/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await experience.findByIdAndUpdate(id, updatedData, options);
    res.status(204).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/experience/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await experience.findByIdAndDelete(id);
    res.status(200).send("Interview Experience Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("Server is working");
});
