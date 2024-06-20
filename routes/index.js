const express = require("express");
const router = express.Router();

const messages = [];

if (messages.length > 300) {
	messages = messages.slice(-300, messages.length)
}

let name = '';

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { messages: messages, name: name });
});

router.post("/", function(req, res, next) {
	author = req.body.name;
	messageText = req.body.message;
	if (author.length == 0 || messageText.length == 0) {
		return;
	}
	name = author
	messages.push({text: messageText, user: author, added: new Date()})
	res.redirect('/');
})

module.exports = router;
