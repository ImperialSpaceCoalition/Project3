const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const { signupValidationRules, loginValidationRules, validate } = require('../utils/validation');

// Route for user signup
router.post('/signup', signupValidationRules(), validate, async (req, res) => {
  try {
    // Check if the email is already registered
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
    }

    // Create a new user
    user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    // Save the user to the database
    await user.save();

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route for user login
router.post('/login', loginValidationRules(), validate, async (req, res) => {
  try {
    // Check if the user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
    }

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
