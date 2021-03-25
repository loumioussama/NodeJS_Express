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
router.get('/results/:idTest', passport.authenticate("bearer", { session: false }), async (req, res) => {
    const resultQCM = await Result.findById(req.params.idTest);
    res.json(resultQCM);
});


////VerificationduTestByQuestion
router.get('/results/:idTest/:idQCM/:idQuestion',passport.authenticate("bearer", { session: false }), async (req, res) => {
    const resultQCM = await Result.findById(req.params.idTest)
    .map(x => x.answers.find(x => x.idQuestion==req.params.idQuestion));
    const answerQCM = await Question.findById(req.params.idQCM)
    .map(x => x.description.find(x => x._id==req.params.idQuestion));
    console.log(answerQCM);
    let Test=false;
    (answerQCM.answer==resultQCM.answer) ? Test=true : Test;
    res.json(Test);
});

////CalculeScoreTest
var score=0;
router.put('/results/:idTest/:idQCM', passport.authenticate("bearer", { session: false }), async (req, res) => {
    const resultQCM = await Result.findById (req.params.idTest)
    .map(x => x.answers.map(x => x.answer));
    console.log(resultQCM);
    const answerQCM = await Question.findById(req.params.idQCM)
    .map(x => x.description.map(x => x.answer));
    console.log(answerQCM);
    const ScoreTest = await answerQCM.map((x,index) => {
       resultQCM.map((y,j) => {
           if(index==j){
           if(x==y){
                score++;
           }
           else{
              score;
           }}
       });
    } );
    const userTest= await  Result.findById(req.params.idTest);
    userTest.score=score;
     const finalTest=  await Result.findByIdAndUpdate(req.params.idTest, userTest , {new:true});
    res.json( finalTest );
});



module.exports = router;