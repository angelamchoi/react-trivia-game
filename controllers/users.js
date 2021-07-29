const User = require('../models/user');
// const jwt = require("jsonwebtoken");
// const SECRET = process.env.SECRET;

async function signup(req,res) {
    const user = new User(req.body)
    try {
        await user.save()
         // const token = createJWT(user);
        // res.json({ token });
        res.json({user})
    }
    catch(err) {
        return res.status(400).json(err);
    }
}

// function createJWT(user) {
//   const payload = {
//     user,
//   };
//   const options = {
//     expiresIn: "24h",
//   };
//   return jwt.sign(payload, SECRET, options);
// }

module.exports = {
    signup
    //LOGIN
};