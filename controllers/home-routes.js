const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
    console.log(req.session)
    Post.findAll({
        attributes: [
            "id",
            "post_url",
            "title",
            "created_at"
        ],
        order: [["created_at", "DESC"]],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render("homepage", { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

module.exports = router;