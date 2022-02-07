const { Student, Score, Subject, Person, sequelize } = require("../models/");
exports.fetchAllStudents = async () => {
  console.log("\n\n***\n no fetchaallllll: ", "\n***\n");
  try {
    return await Student.findAll({
      attributes: [
        "id",
        "school_register",
        [sequelize.literal("Person.first_name"), "first_name"],
        [sequelize.literal("Person.last_name"), "last_name"],
        [sequelize.literal("Person.username"), "username"],
        [sequelize.literal("Person.email"), "email"],
      ],
      include: [{ model: Person, required: true, attributes: [] }],
    });
  } catch (e) {
    console.log("\n\n***\n e: ", e, "\n***\n");
  }
};

exports.fetchAllStudentsWithScores = async () => {
  try {
    return await Student.findAll({
      attributes: [
        "id",
        "school_register",
        [sequelize.literal("Person.first_name"), "first_name"],
        [sequelize.literal("Person.last_name"), "last_name"],
        [sequelize.literal("Person.username"), "username"],
        [sequelize.literal("Person.email"), "email"],
      ],
      include: [
        {
          model: Score,
          as: "Score",
          attributes: ["id", "student_id", "subject_id", "score", "createdAt"],
          order: ["createdAt", "desc"],
          required: true,
          include: [
            {
              model: Subject,
              attributes: ["name"],
            },
          ],
        },
        { model: Person, required: true, attributes: [] },
      ],
    });
  } catch (e) {
    //@todo to implement
    console.log("\n\n***\n eeeeeeeeeeeeeeeee: ", e, "\n***\n");
  }
};

exports.fetchAllStudentsCurrentScore = async () => {
  try {
    return await Student.findAll({
      attributes: [
        "id",
        "school_register",
        [sequelize.literal("Person.first_name"), "first_name"],
        [sequelize.literal("Person.last_name"), "last_name"],
        [sequelize.literal("Person.username"), "username"],
        [sequelize.literal("Person.email"), "email"],
      ],
      include: [
        {
          model: Score,
          where: { current: true },
          as: "Score",
          attributes: ["id", "student_id", "subject_id", "score", "createdAt"],
          order: ["createdAt", "desc"],
          required: true,
          include: [
            {
              model: Subject,
              attributes: ["name"],
            },
          ],
        },
        { model: Person, required: true, attributes: [] },
      ],
    });
  } catch (e) {
    //@todo to implement
    console.log("\n\n***\n eeeeeeeeeeeeeeeee: ", e, "\n***\n");
  }
};
