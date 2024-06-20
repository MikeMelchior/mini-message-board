const express = require("express");
const router = express.Router();

const messages = [];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { messages: messages });
});

router.post("/", function(req, res, next) {
	author = req.body.name;
	messageText = req.body.message;
	messages.push({text: messageText, user: author, added: new Date()})
	res.redirect('/')
})

module.exports = router;
