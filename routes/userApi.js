const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

router.get('/users', async(req, res) => {
    const users = await User.find();
    res.json(users);  
});

router.post('/users', async (req, res) => {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
});



module.exports = router;