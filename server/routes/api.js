const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    res.send('From APIs Page')
})

module.exports = router;
