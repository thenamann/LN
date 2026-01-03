const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hello from home by express");
});

router.get('/users', (req, res) => {
    res.send(" user lists ");
});
module.exports = router;

