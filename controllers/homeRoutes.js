const router = require('express').Router();
const { User, Blog, Comment } = require('../models/');


router.get("/", (req, res) => {
    Blog.findAll({
})
        .then((dbBlogData) => {
            res.json(dbBlogData);
            if (!dbBlogData) {
                res.status(404).json({ message: "No blogs" });
                return;
            }
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