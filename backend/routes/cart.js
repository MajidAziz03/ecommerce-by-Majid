const express = require('express')
const router = express.Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../verifyToken.js')
const Cart = require('../models/Cart.js')

// Create Product 

router.post('/', verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(201).json(savedCart)
    } catch (error) {
        res.status(401).json("You are not Logged in ")
    }
})

// UPDATE ACCOUNT

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(201).json(updatedCart)
    } catch (error) {
        res.status(401).json("You are not logged in ")
    }
})


// DELETE

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deleteCart = await Cart.findByIdAndDelete(req.params.id)
        res.status(201).json("Cart has been deleted successfully")
    } catch (error) {
        res.status(401).json("You are not Authorized")
    }
})



// GET PRODUCT

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(201).json(cart)
    } catch (error) {
        res.status(401).json("You are not Authorized")
    }
})


// GET ALL PRODUCTS

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(201).json(carts)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})


module.exports = router;