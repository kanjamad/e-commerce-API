const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Product.find({})
        .populate('category_id')
        .exec((err, allProducts) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: allProducts});
    });
});

router.get('/:id', (req, res) => {
    db.Product.findById(req.params.id)
        .populate('category_id')
        .exec((err, foundProduct) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: foundProduct});
    });
});

router.post('/', (req, res) => {
    db.Product.create(req.body, (err, newProduct) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: newProduct});
    });
});

router.put('/:id', (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: updatedProduct});
    });
});

router.delete('/:id', (req, res) => {
    db.Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: deletedProduct});
    });
});


module.exports = router;