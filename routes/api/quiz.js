
var express = require('express');
var router = express.Router();
var quizCtrl = require('../controllers/api/quiz');

router.get('/create', quizCtrl.index);
router.get('/create/:id', quizCtrl.show);
router.post('/create', quizCtrl.create);
router.delete('/create/:id', quizCtrl.delete);
router.put('/creates/:id', quizCtrl.update);

module.exports = router;