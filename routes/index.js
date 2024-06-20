const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
	res.render("form", {title: "Message Form"})
});

router.post("/new", function(req, res, next) {
	author = req.body.name;
	messageText = req.body.message;
	messages.push({text: messageText, user: author, added: new Date()})
	res.redirect('/')
})

module.exports = router;
