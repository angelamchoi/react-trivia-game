
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    category: {type: String, required: true},
    question: {type: String, required: true},
    choice1: {type: String, required: true},
    choice2: {type: String, required: true},
    choice3:{type: String, required: true},
    choice4:{type: String, required: true},
    correctAnswer: {type: String, required: true},
},{
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);