"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Person, { foreignKey: "person_id" });
      this.hasMany(models.Score, { foreignKey: "student_id", as: "Score" });
    }
  }
  Student.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      person_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Person",
          key: "id",
        },
      },
      school_register: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "students",
    }
  );
  return Student;
};
