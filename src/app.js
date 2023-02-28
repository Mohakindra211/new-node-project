const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

const bookRoutes = require("./routes/books");
const studentRoutes = require("./routes/students");
const issueRoutes = require("./routes/issues");

app.use("/books", bookRoutes);
app.use("/students", studentRoutes);
app.use("/issues", issueRoutes);

module.exports = app;
