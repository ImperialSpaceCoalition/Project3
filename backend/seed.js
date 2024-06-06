const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load models
const User = require('./models/User');
const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fido', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Read mock data from JSON file
const mockDataPath = path.join(__dirname, 'mockData.json');
const mockData = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

// Seed users
const seedUsers = async () => {
  try {
    await User.deleteMany({});
    const users = await User.insertMany(mockData.users);
    console.log('Users seeded successfully');
    return users;
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// Seed posts
const seedPosts = async (users) => {
  try {
    const posts = mockData.posts.map(post => {
      const user = users.find(u => u.username === post.author);
      if (!user) {
        throw new Error(`User not found for post author: ${post.author}`);
      }
      return {
        ...post,
        author: user._id,
      };
    });

    await Post.deleteMany({});
    await Post.insertMany(posts);
    console.log('Posts seeded successfully');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

// Seed the database
const seedDatabase = async () => {
  try {
    const users = await seedUsers();
    if (users) {
      await seedPosts(users);
    }
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.disconnect();
  }
};

seedDatabase();





