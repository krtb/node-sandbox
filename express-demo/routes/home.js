const express = require('express');
const router = express.Router();

//app object has methods: get, post, put, delete
// https://expressjs.com/en/4x/api.html#app for available properties
router.get('/', (req, res) => {
    //specify route and callback func, or route handler
    res.render('index', { title: "My express app", message: "Hello!" })
});

module.exports = router