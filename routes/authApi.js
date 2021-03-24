const express = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/userSchema');
const router = express.Router();

///Register
router.post('/users', async (req, res) => {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
});


////Authentification
router.post('/login', async (req, res) => {
    const connectedUser = await User.findOne({email: req.body.email, password: req.body.password});
    if(connectedUser ===null)
    {
        res.json({message: 'email or password is invalid!'});
    }
    else{
        // 1. create a jwt token
        const data = {
            email: connectedUser.email,
            userId: connectedUser._id
        };
        const createdToken = jwt.sign(data, 'secret', {expiresIn: "1d"});
        // 2. send response
        res.json({message: 'login successfully!', token: createdToken});
    }
});

module.exports = router;