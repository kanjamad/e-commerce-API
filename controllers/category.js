const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Category.find({}, (err, allCategorys) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: allCategorys});
    });
});

router.get('/:id', (req, res) => {
    db.Category.findById(req.params.id, (err, foundCategory) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: foundCategory});
    });
});

router.post('/', (req, res) => {
    db.Category.create(req.body, (err, newCategory) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: newCategory});
    });
});

router.put('/:id', (req, res) => {
    db.Category.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCategory) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: updatedCategory});
    });
});

router.delete('/:id', (req, res) => {
    db.Category.findByIdAndRemove(req.params.id, (err, deletedCategory) => {
        if (err) return res.status(500).json({status: 500, error: 'Something went wrong!!! Please try again'});
        res.json({status: 200, message: 'Success', data: deletedCategory});
    });
});


module.exports = router;