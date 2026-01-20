const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// SIGN UP
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup failed" });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user ONLY by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }
    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }
    res.json({ message: "Login successful", username: user.username });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;
