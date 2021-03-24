const express = require('express');
const Result = require('../models/resultSchema');
const passport = require('passport');

const router = express.Router();


///GetTest
router.get('/results', (req, res) => {
    res.json({message:"welcome to test"});  
});

///AddTest
router.post('/results',  passport.authenticate("bearer", { session: false }),async (req, res) => {
    const createdResult = await Result.create(req.body);
    res.json(createdResult);
});




module.exports = router;