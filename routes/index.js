const express = require('express');
const router = express.Router();

const login = require('./login');

router.use('/login', login);
router.get('/health-check', (req, res) => {
    res.status(200).json({ "status": true, "time": new Date() })
})

module.exports = router;