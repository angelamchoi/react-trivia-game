
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    question: {type: String, required: true},
    a: {type: String, required: true},
    b: {type: String, required: true},
    c: {type: String, required: true},
    d: {type: String, required: true},
    answer: {type: String, required: true},
},{
    timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);