const router = require("express").Router();
const { Blog } = require("../../models");


// router.get("/:blog_id", (req, res) => {
//     Blog.findAll(req.params.blog_id, {
//     })
//         .then((dbBlogData) => {
//             res.json(dbBlogData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });



router.post("/", (req, res) => {
    Blog.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id
    })
        .then((dbBlogData) => {
            res.json(dbBlogData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err); 
        });
});

module.exports = router;