"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Person, { foreignKey: "personId", as: "Person" });
    }
  }
  Teacher.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      personId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Person",
          key: "id",
        },
      },
      employeeRegister: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Teacher",
      tableName: "teachers",
    }
  );
  return Teacher;
};
