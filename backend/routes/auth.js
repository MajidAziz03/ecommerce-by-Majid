const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

// REGISTER

router.post('/register', async (req, res) => {
    const hashed = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
    })
    try {
        const newUser = await user.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(401).json("error in creating account", error.message)
    }
})


// LOGIN  


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("Wrong Credentials")
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        originalPassword !== req.body.password && res.status(401).json("Wrong Credentials")
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        )
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken })
    } catch (error) {
        res.status(401).json("error in signing account", error.message)
    }

})











module.exports = router; 