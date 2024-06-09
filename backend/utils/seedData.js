const User = require('../models/user');
const Post = require('../models/posts');
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
        for (let user of mockUsers) {
            const existingUser = await User.findOne({ email: user.email });
            if (!existingUser) {
                await User.create(user);
            }
        }

        // Get all users from the database
        const users = await User.find();

        // Assign user IDs to posts
        const postsWithAuthor = mockPosts.map(post => {
            post.author = users.find(user => user.username === 'user1')._id;
            return post;
        });

        // Insert the posts into the database
        await Post.insertMany(postsWithAuthor);

        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};
module.exports = seedDatabase;