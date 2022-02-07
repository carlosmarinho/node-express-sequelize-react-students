"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Person.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: DataTypes.STRING(100),
      first_name: DataTypes.STRING(200),
      last_name: DataTypes.STRING(200),
      email: DataTypes.STRING(200),
      password: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Person",
      tableName: "persons",
    }
  );
  return Person;
};
