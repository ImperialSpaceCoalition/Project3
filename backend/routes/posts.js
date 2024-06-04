const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// Create a new post
router.post('/', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});
module.exports = router;