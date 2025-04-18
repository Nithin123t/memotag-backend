const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const newEntry = new Contact(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Success' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

module.exports = router;
