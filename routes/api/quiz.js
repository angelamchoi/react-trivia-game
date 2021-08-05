
const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/api/quiz');

// protected routes
router.use(require('../../config/auth'));
router.post('/create', quizCtrl.create);
router.delete('/create/:id', quizCtrl.delete);
router.put('/create/:id', quizCtrl.update);

module.exports = router;