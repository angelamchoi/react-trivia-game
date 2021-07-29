const User = require('../models/user');

async function signup(req,res) {
    const user = new User(req.body)
    try {
        await user.save()
        res.json({user})
    }
    catch(err) {
        return res.status(400).json(err);
    }
}
module.exports = {
    signup
};