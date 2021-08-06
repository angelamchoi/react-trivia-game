const Quiz = require('../models/quiz');


async function index(req, res) {
  const quizzes = await Quiz.find({});
  res.status(200).json(quizzes);
}

async function create(req, res) {
  const quiz= await new Quiz(req.body);
  try {
    await quiz.save();
    res.json(quiz);
} catch (err) {
    res.status(400).json(err);
}
}

async function show(req, res) {
  const quiz = await Quiz.findById(req.params.id);
  res.status(200).json(quiz);
}

async function deleteOne(req, res) {
  const deletedQuiz = await Quiz.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedQuiz);
}

async function update(req, res) {
  const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedQuiz);
}

module.exports = {
  index,
  create,
  show,
  delete: deleteOne,
  update,
}