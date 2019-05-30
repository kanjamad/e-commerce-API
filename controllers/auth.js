const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Database
const db = require('./models');

// POST Signup Route
router.post('/signup', (req, res) => {
    const errors = [];
    console.log(req.body)

    // Validate Form Data
    if (!req.body.fullName){
        errors.push({message: 'Please enter your Full Name'});
    }

    if (!req.body.email){
        errors.push({message: 'Please enter your email'});
    }

    if (!req.body.gender){
        errors.push({message: 'Please enter your gender'});
    }

    if (!req.body.password){
        errors.push({message: 'Please enter your password'});
    }

    if (req.body.password !== req.body.password2){
        errors.push({message: 'Your passwords do not match!'});
    }

    // Query database to see if email account already exists.
    // If return res with errors
    // Find one User by email
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.json({user: req.body, errors: [{message: 'Something went wrong!!! Please try again'}]});

        // If we didn't find a user, re-json the login page with error message
        
    });
});