const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
});

router.get('/', (req, res, next) => {
    // console.log("In another middleware!");
    // res.send('<h1>Hello from Express!</h1>');

    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, });
});

module.exports = router;