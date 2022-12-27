const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dot = require('dotenv').config()
const userRoutes = require('./routes/user.js')
const authRoutes = require('./routes/auth.js')
const productRoutes = require('./routes/product.js')
const cartRoutes = require('./routes/cart.js')
const orderRoutes = require('./routes/order.js')
const stripeRoutes = require('./routes/stripe.js')
const cors = require('cors') 


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database is Connected")
}).catch((err) => {
    console.log("Error in Database", err.message)
})

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/checkout', stripeRoutes)


app.get('/', (req, res) => {
    res.send("Hey")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Listening at ${PORT}`)
})