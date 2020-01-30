const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

router.get('/products', function(req, res) {
    Product.find(function(err, products) {
        if (err) {
            console.log('error', err);
        } else {
            console.log('products done');
            res.json(products);
        }
    });
})

router.get('/categories', function(req, res) {
    Category.find(function(err, categories) {
        if (err) {
            console.log('error', err);
        } else {
            console.log('categories done');
            res.json(categories);
        }
    });
})

module.exports = router;