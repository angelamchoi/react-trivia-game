
const express = require('express');
const router = express.Router();
const quizCtrl = require('../../controllers/quiz');


// protected routes
router.use(require('../../config/auth'));
router.get('/', quizCtrl.index);
router.post('/', quizCtrl.create);
router.delete('/:id', quizCtrl.delete);
router.get('/:id', quizCtrl.show);
router.post('/quiz', quizCtrl.create);
router.put('/:id', quizCtrl.update);

module.exports = router;