const express = require('express')
const router = express.Router()
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../verifyToken.js')
const Product = require('../models/Product.js')

// Create Product 

router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const product = new Product(req.body)
    try {
        const savedProduct = await product.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})

// UPDATE ACCOUNT

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        res.status(201).json(updatedProduct)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})


// DELETE

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json("Product has been deleted successfully")
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})



// GET PRODUCT

router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(201).json(product)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})


// GET ALL PRODUCTS
// sort ka mtlb hai latest products ayengay 

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        }
        else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } })
        }
        else {
            products = await Product.find()
        }
        res.status(201).json(products)
    } catch (error) {
        res.status(401).json("You are not Admin")
    }
})


module.exports = router;