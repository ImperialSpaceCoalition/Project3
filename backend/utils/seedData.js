const User = require('../models/user');
const Post = require('../models/post');
const mockUsers = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1'
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2'
    }
];
const mockPosts = [
    {
        title: 'First Post',
        content: 'This is the first post content',
        author: null // Placeholder for user ID, will be populated later
    },
    {
        title: 'Second Post',
        content: 'This is the second post content',
        author: null // Placeholder for user ID, will be populated later
    }
];
const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany();
        await Post.deleteMany();
        // Seed mock users
        const users = await User.insertMany(mockUsers);
        // Assign user IDs to posts
        const postsWithAuthor = mockPosts.map(post => {
            post.author = users.find(user => user.username === 'user1')._id;
            return post;
        });
        // Seed mock posts
        await Post.insertMany(postsWithAuthor);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};
module.exports = seedDatabase;