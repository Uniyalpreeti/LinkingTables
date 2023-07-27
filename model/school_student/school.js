const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Student = require("./student");

const School = sequelize.define("p_school", {
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Principal: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

School.hasMany(Student,{
foreign 
})


module.exports = School;