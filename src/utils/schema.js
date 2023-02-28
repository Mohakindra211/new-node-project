const Joi = require("joi");

module.exports = {
  createBook: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    year: Joi.number().integer().required(),
    ISBN: Joi.string().required(),
  }),
};
