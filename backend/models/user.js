const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

// Middleware to hash the user's password before saving it to the database
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Method to generate JWT token for authentication
userSchema.methods.generateAuthToken = function() {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7 days' });
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
