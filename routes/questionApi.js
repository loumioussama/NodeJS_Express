const express = require('express');
const Question = require('../models/questionSchema');
const router = express.Router();

router.get('/questions', async(req, res) => {
    const questions = await Question.find();
    res.json(questions);  
});

router.get('/questions/:id', async (req, res) => {
    console.log(req.params.id);
    const question = await Question.findById(req.params.id);
    res.json(question);
});

router.post('/questions', async (req, res) => {
    const createdQuestion = await Question.create(req.body);
    res.json(createdQuestion);
});

router.put('/questions/:id', async (req, res) => {
    console.log(req.body);
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedQuestion);
});

router.delete('/questions/:id', async (req, res) => {
    await Question.findByIdAndRemove(req.params.id);
    res.json({message : 'Question deleted successfully!'});
});







module.exports = router;