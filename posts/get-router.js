const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('accounts')
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error retrieving accounts.' })
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    db('accounts').where('id', id).first()
        .then(account => {
            if (account) {
                res.json(account);
            } else {
                res.status(404).json({ error: `Account ${id} does not exist`})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error retrieving' })
        })
});

module.exports = router;