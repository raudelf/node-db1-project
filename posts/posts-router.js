const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.post('/', (req, res) => {
    const accountData = req.body;

    db('accounts').insert(accountData)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error creating new account', err })
        })
});

module.exports = router;