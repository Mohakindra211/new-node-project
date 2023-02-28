const express = require("express");
const router = express.Router();
const { createBook, getBooks, deleteBook } = require("../controllers/books");

router.post("/", createBook);
router.get("/", getBooks);
router.delete("/:id", deleteBook);

module.exports = router;
