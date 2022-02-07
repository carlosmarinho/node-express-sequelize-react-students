"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Student.belongsToMany(models.Subject, { through: this });
      // models.Subject.belongsToMany(models.Student, { through: this });
      this.belongsTo(models.Subject, { foreignKey: "subject_id" });
    }
  }
  Score.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Student",
          key: "id",
        },
      },
      current: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      subject_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Subject",
          key: "id",
        },
      },
      score: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Score",
      tableName: "scores",
    }
  );
  return Score;
};
