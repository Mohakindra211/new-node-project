// src/controllers/books.js
const { Book } = require("../models");
const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().integer().required(),
  ISBN: Joi.string().required(),
});

exports.createBook = async (req, res) => {
  try {
    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const book = await Book.create(value);

    return res.status(201).json({ book });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json({ books });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await book.destroy();

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
