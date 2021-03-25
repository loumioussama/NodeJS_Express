const express = require('express');
const Result = require('../models/resultSchema');
const passport = require('passport');
const Question = require('../models/questionSchema');


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

////ResultTest
router.get('/results/:idTest', async (req, res) => {
    const resultQCM = await Result.findById(req.params.idTest);
    res.json(resultQCM);
});


////VerificationduTestByQuestion
router.get('/results/:idTest/:idQCM/:idQuestion', async (req, res) => {
    const resultQCM = await Result.findById(req.params.idTest)
    .map(x => x.answers.find(x => x.idQuestion==req.params.idQuestion));
    const answerQCM = await Question.findById(req.params.idQCM)
    .map(x => x.description.find(x => x._id==req.params.idQuestion));
    console.log(answerQCM);
    let Test=false;
    (answerQCM.answer==resultQCM.answer) ? Test=true : Test;
    res.json(Test);
});



module.exports = router;