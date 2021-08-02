
var express = require('express');
var router = express.Router();
var quizCtrl = require('../controllers/api/quiz');

router.get('/', quizCtrl.index);
router.get('/:id', quizCtrl.show);
router.post('/', quizCtrl.create);
router.delete('/:id', quizCtrl.delete);
router.put('/:id', quizCtrl.update);

module.exports = router;