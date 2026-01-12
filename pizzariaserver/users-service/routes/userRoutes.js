const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGN UP
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    //empty fields validation
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  //user saved in database
    const user = new User({ username, password });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    //check user exists validation
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;
