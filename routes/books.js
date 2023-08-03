const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.render('books/index', { books });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

