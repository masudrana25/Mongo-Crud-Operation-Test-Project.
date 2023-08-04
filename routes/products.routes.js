const express = require('express');
const Router = express.Router();

const Product = require('../models/schema');

// Product page "create" post request handle
Router.post('/product', async (req, res) => {
  try {
    const newProduct = new Product({
    productName: req.body.productName,
    price: req.body.price,
    quantity: req.body.quantity,
  });
    await newProduct.save();
    res.send({
      success: true,
      message: 'Product saved successfully',
      newProduct,
    })
  } catch (error) {
    res.send(error.message);
  }
});


module.exports = Router;