const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./user-seed.json');
const Blog = require('../models/Blog');
const blogData = require('./blog-seed.json');
const Comment = require('../models/Comment');
const commentData = require('./comment-seed.json');

const seedData = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Blog.bulkCreate(blogData, {
        individualHooks: true,
        returning: true,
    });


    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });



    process.exit(0);
};


seedData();
