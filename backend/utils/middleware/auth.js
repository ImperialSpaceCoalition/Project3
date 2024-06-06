const jwt = require('jsonwebtoken');
const config = require('../config'); // Assuming you have a configuration file

// Middleware function to authenticate JWT token
const authMiddleware = (req, res, next) => {
  // Extract token from request headers
  const token = req.header('x-auth-token');

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret); // Assuming secret key in config

    // Add user from payload to request object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
