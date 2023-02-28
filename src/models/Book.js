// src/models/Book.js
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: {
      type: "The Lord of the rings",
      allowNull: false,
    },
    author: {
      type: "J.R.R. Tolkien",
      allowNull: false,
    },
    year: {
      type: 1955,
      allowNull: false,
    },
    ISBN: {
      type: "472851",
      allowNull: false,
      unique: true,
    },
  });

  return Book;
};

// src/models/Student.js
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Student;
};

// src/models/Issue.js
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define("Issue", {
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Issue;
};
