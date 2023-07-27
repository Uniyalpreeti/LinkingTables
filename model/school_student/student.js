const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Student = sequelize.define("p_student", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Student;