const express = require('express');
const router = express.Router();

// Import individual route files
const authRoutes = require('./auth');
const postRoutes = require('./post');
const uploadRoutes = require('./upload');

// Use the imported routes
router.use('/api/auth', authRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/upload', uploadRoutes);

module.exports = router;
