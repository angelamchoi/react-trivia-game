const { Schema, model }  = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);