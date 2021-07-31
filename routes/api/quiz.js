
var express = require('express');
var router = express.Router();
var quizCtrl = require('../controllers/api/quiz');

router.get('/quiz', quizCtrl.index);
router.get('/quiz/:id', quizCtrl.show);
router.post('/create', quizCtrl.create);
router.delete('/quizzes/:id', quizCtrl.delete);
router.put('/quizzes/:id', quizCtrl.update);

module.exports = router;