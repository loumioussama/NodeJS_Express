const express = require('express');
const Question = require('../models/questionSchema');
const router = express.Router();


///GetAllQuestions
router.get('/questions', async(req, res) => {
    const page=req.query.page;
    const limit=req.query.limit;
    const startIndex = (page -1) * limit;
    const endIndex = page  * limit;
    const questions = await Question.find();
    res.json(questions.slice(startIndex,endIndex));  
});

////GetOneQuestion
router.get('/questions/:id', async (req, res) => {
    const question = await Question.findById(req.params.id);
    res.json(question);
});

////GetOneQCMPagination
router.get('/question/:id', async (req, res) => {
    const page=req.query.page;
    const limit=req.query.limit;
    const startIndex = (page -1) * limit;
    const endIndex = page  * limit;
    const question = await Question.findById(req.params.id);
    res.json(question.description.slice(startIndex,endIndex));
});

////GetOneQuestionByQCM
router.get('/questions/:idQCM/:idQuestion', async (req, res) => {
    const questionQCM = await Question.findById(req.params.idQCM)
    .map(x => x.description.find(x => x._id==req.params.idQuestion));
    res.json(questionQCM);
});

////AddQuestion
router.post('/questions', async (req, res) => {
    const createdQuestion = await Question.create(req.body);
    res.json(createdQuestion);
});


///UpdateQuestion
router.put('/questions/:id', async (req, res) => {
    console.log(req.body);
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedQuestion);
});

///DeleteQuestion
router.delete('/questions/:id', async (req, res) => {
    await Question.findByIdAndRemove(req.params.id);
    res.json({message : 'Question deleted successfully!'});
});







module.exports = router;