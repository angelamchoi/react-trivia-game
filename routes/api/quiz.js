
const express = require('express');
const router = express.Router();
const quizCtrl = require('../../controllers/quiz');


// protected routes
router.use(require('../../config/auth'));
router.get('/', quizCtrl.index);
router.post('/', quizCtrl.create);
router.get('/:id', quizCtrl.show);
router.post('/quiz', quizCtrl.create);
router.delete('/create/:id', quizCtrl.delete);
router.put('/create/:id', quizCtrl.update);

module.exports = router;