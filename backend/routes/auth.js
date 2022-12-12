const express = require('express')
const router = express.Router()
const User = require('../models/User.js')

// REGISTER

router.post('/register', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const newUser = await user.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(401).json("error in creating account", error.message)
    }

})















module.exports = router; 