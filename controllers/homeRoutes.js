const router = require('express').Router();
const { User, Blog, Comment } = require('../models/');


router.get("/", (req, res) => {
    Blog.findAll({
        attributes: ["title", "body"],
        include: [
            {
                model: User,
                attributes: ["username"],
            },
            {
                model: Comment,
                attributes: ["body"]
            }
        ],
    })
        .then((dbBlogData) => {
            res.json(dbBlogData);
            if (!dbBlogData) {
                res.status(404).json({ message: "No blogs" });
                return;
            }

            const blogs = blogData.map((blog) => blog.get({ plain: true }));


            res.render('homepage', {
                blogs,
                logged_in: req.session.logged_in
            });

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.get("/login", (req, res) => {
//     console.log("Is logged in?", req.session.loggedIn);
//     res.render("login", { loggedIn: req.session.loggedIn });
// });

module.exports = router;