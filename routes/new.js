const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('form.ejs', { title: 'New Message Form' })
})

module.exports = router