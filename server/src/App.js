const express = require("express");
const app = express();
require("../dbcoo");
const experience = require("../models/exp");
const skill = require("../models/skill");
const user = require("../models/user");
const port = process.env.PORT || 3000;
app.use(express.json());
app.post("/user", async (req, res) => {
  try {
    const a = new user(req.body);
    const gg = await a.save();

    res.status(201).send(gg);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/useremail/:email", async (req, res) => {
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

app.get("/userid/:id", async (req, res) => {
  try {
    const a = await user.find({ _id: req.params.id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/userid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await user.findByIdAndUpdate(id, updatedData, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/useremail/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;
    const options = { new: true };
    const result = await user.findAndModify(email, updatedData, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/userid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await user.findByIdAndDelete(id);
    res.status(200).send("User Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
});

app.delete("/useremail/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const data = await user.findOneAndDelete({ email: email });
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

app.get("/skillname/:name", async (req, res) => {
  try {
    const a = await skill.find({ skill_name: req.params.name });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/skillid/:id", async (req, res) => {
  try {
    const a = await skill.find({ _id: req.params.id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/skillsid/:s_id", async (req, res) => {
  try {
    const a = await skill.find({ s_id: req.params.s_id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/skillid/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await skill.findByIdAndUpdate(_id, updatedData, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/skillsid/:s_id", async (req, res) => {
  try {
    const s_id = req.params.s_id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await skill.findAndModify(s_id, updatedData, options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/skillid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await skill.findByIdAndDelete(id);
    res.status(200).send("Particular skill of current user Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
});

app.delete("/skillsid/:s_id", async (req, res) => {
  try {
    const s_id = req.params.s_id;
    const data = await skill.deleteMany({ s_id: s_id });
    res.status(200).send("All skills of cuurent user Deleted!");
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

app.get("/experiencecname/:c_name", async (req, res) => {
  try {
    const a = await experience.find({ c_name: req.params.c_name });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/experienceid/:id", async (req, res) => {
  try {
    const a = await experience.find({ _id: req.params.id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/experiencesid/:s_id", async (req, res) => {
  try {
    const a = await experience.find({ s_id: req.params.s_id });
    if (!a) {
      res.status(404).send();
    } else {
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.patch("/experienceid/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await experience.findByIdAndUpdate(
      _id,
      updatedData,
      options
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/experiencesid/:s_id", async (req, res) => {
  try {
    const s_id = req.params.s_id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await experience.findByIdAndUpdate(
      s_id,
      updatedData,
      options
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/experienceid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await experience.findByIdAndDelete(id);
    res.status(200).send("Particular Experience Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
});

app.delete("/experiencesid/:s_id", async (req, res) => {
  try {
    const s_id = req.params.s_id;
    const data = await akill.deleteMany({ s_id: s_id });
    res.status(200).send("All experience Deleted!");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log("Server is working");
});
