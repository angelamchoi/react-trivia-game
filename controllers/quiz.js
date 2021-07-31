const Quiz = require('../../models/quiz');

function update(req, res) {
    Quiz.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(quiz) {
      res.status(200).json(quiz);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  }
  
function deleteOne(req, res) {
    Quiz.findByIdAndDelete(req.params.id).then(function(quiz) {
      res.status(200).json(quiz);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  }
  
function show(req, res) {
    Quiz.findById(req.params.id).then(function(quiz) {
      res.status(200).json(quiz);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  }
  
function create(req, res) {
    Quiz.create(req.body).then(function(quiz) {
      res.status(201).json(quiz);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  }
  
function index(req, res) {
    Quiz.find({}).then(function(quizzes) {
      res.status(200).json(puppies);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  }


module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
}