const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Order.find({})
        .populate('users')
        .populate('products')
        .exec((err, allOrders) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: allOrders});
    });
});

router.get('/:id', (req, res) => {
    db.Order.findById(req.params.id)
        .populate('users')
        .populate('products')
        .exec((err, foundOrder) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: foundOrder});
    });
});

router.post('/', (req, res) => {
    db.Order.create(req.body, (err, newOrder) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: newOrder});
    });
});

router.put('/:id', (req, res) => {
    db.Order.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedOrder) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: updatedOrder});
    });
});

router.delete('/:id', (req, res) => {
    db.Order.findByIdAndRemove(req.params.id, (err, deletedOrder) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: deletedOrder});
    });
});


module.exports = router;