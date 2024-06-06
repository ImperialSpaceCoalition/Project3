const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load models
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read mock data from JSON file
const mockDataPath = path.join(__dirname, 'mockData.json');
const mockData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

// Seed users
const seedUsers = async () => {
  try {
    await User.insertMany(mockData.users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// Seed posts
const seedPosts = async () => {
  try {
    // Retrieve user IDs for authors
    const users = await User.find({}, '_id');

    // Map author usernames to corresponding user IDs
    const authorMap = {};
    users.forEach(user => {
      authorMap[user.username] = user._id;
    });

    // Modify post data to include author IDs
    const posts = mockData.posts.map(post => ({
      ...post,
      author: authorMap[post.author],
    }));

    await Post.insertMany(posts);
    console.log('Posts seeded successfully');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

// Seed the database
const seedDatabase = async () => {
  await seedUsers();
  await seedPosts();
  mongoose.disconnect();
};

seedDatabase();
