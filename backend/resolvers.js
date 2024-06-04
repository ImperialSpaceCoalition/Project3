const user = require('./models/user');
// const pet = require('./models/pet');
// const shelter = require('./models/shelter');
const post = require('./models/posts');

const resolvers = {
    query: {
        getUser: async (_, { id }) =>  await user.findById(id).populate('posts'),
        getUsers: async () => await user.find().populate('posts'),
        // getShelter: async (_, { id }) => await shelter.findById(id).populate('pets'),
        // getShelters: async () => await shelter.find().populate('pets'),
        // getPet: async (_, { id }) => await pet.findById(id).populate('shelter'),
        // getPets: async () => await pet.find().populate('shelter'),
        getPost: async (_, { id }) => await post.findById(id).populate('user'),
        getPosts: async () => await post.find().populate('user'),
    },
    Mutation: {
        createUser: async (_, { username, email, password }) => {
            const user = new user({ username, email, password });
            return await user.save();
        },
        updateUser: async (_, { id, username, email, password }) => {
            return await user.findByIdAndUpdate(id, { username, email, password }, { new: true });
        },
        deleteUser: async (_, { id }) => {
            return await user.findByIdAndDelete(id);
        },
        // createShelter: async (_, { name, address }) => {
        //     const shelter = new shelter({ name, address });
        //     return await shelter.save();
        // },
        // updateShelter: async (_, { id, name, address }) => {
        //     return await shelter.findByIdAndUpdate(id, { name, address }, { new: true });
        // },
        // deleteShelter: async (_, { id }) => {
        //     return await shelter.findByIdAndDelete(id);
        // },
        // createPet: async (_, { name, breed, age, shelterId }) => {
        //     const pet = new pet({ name, breed, age, shelter: shelterId });
        //     return await pet.save();
        // },
        // updatePet: async (_, { id, name, breed, age, }) => {
        //     return await pet.findByIdAndUpdate(id, { name, breed, age }, { new: true });
        // },
        // deletePet: async (_, { id }) => {
        //     return await pet.findByIdAndDelete(id);
        },
        createPost: async (_, { content, userId }) => {
            const post = new post({ content, user: userId });
            return await post.save();
        },
        updatePost: async (_, { id, content }) => {
            return await post.findByIdAndUpdate(id, { content }, { new: true });
        },
        deletePost: async (_, { id }) => {
            return await post.findByIdAndDelete(id);
        }
    };

module.exports = resolvers;