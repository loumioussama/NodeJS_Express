const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();


///GetAllUsers
router.get('/users', async(req, res) => {
    const users = await User.find();
    res.json(users);  
});





module.exports = router;