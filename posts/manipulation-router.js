const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.put('/:id', (req, res) => {
    const accountData = req.body;
    const id = req.params.id;

    db('accounts').where('id', id).first()
        .update(accountData)
        .then(account => {
            if (account) {
                if (accountData.name && accountData.budget) {
                    res.json(account);
                } else {
                    res.status(400).json({ error: 'Please include account name and budget in update'})
                };
            } else {
                res.status(404).json({ error: `Account ${id} does not exist`})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error updating account' })
        })
});

module.exports = router;