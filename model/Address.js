const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const User = require("./User");

const Address = sequelize.define("p_address", {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId : {
    type : DataTypes.INTEGER,
    reference: {
        model : User,
        key : 'id'
    }
  }
});

User.hasMany(Address, {
    foreignKey : "userId", target:"id"
})

Address.belongsTo(User, {
  foreignKey : "userId"
})

module.exports = Address;