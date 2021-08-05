
const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/api/quiz');

// protected routes
router.use(require('../../config/auth'));
router.post('/', checkAuth, quizCtrl.create);
router.delete('/:id', checkAuth, quizCtrl.delete);
router.put('/:id', checkAuth, quizCtrl.update);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;