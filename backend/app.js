const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const seedUsers = require('./utils/seedData');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(async () => {
    console.log('MongoDB connected');
    // Seed mock users
    await seedUsers();
}).catch(err => console.log(err));

// Define routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
app.use(userRoutes);
app.use(postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});