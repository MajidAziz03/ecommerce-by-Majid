const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../verifyToken.js')
const User = require('../models/User.js')

// UPDATE ACCOUNT

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(401).json("not authored")
    }
})



// DELETE

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(201).json("User has been deleted successfully")
    } catch (error) {
        res.status(401).json("You are not authored")
    }
})



// GET USER

router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        res.status(201).json(others)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})


// GET ALL USERS
// sort ka mtlb hai latest user ayega 

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})



// Stats of ALL USERS to get how many accounts are regsitered

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});







module.exports = router; 