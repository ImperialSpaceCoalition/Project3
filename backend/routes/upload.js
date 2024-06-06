const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1 MB file size limit
});

// Route to upload a single file
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'Please upload a file' });
    }
    // Save file metadata to the database (if needed)
    // const newFile = new File({
    //   filename: req.file.filename,
    //   path: req.file.path,
    //   user: req.user.id,
    // });
    // await newFile.save();
    res.json({ filename: req.file.filename, path: req.file.path });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
