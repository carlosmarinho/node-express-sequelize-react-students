"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // const score = [
    //   { student_id: 2, subject_id: 2, score: 45.49 },
    //   { student_id: 2, subject_id: 1, score: 85.4 },
    //   { student_id: 2, subject_id: 5, score: 94.92 },
    //   { student_id: 2, subject_id: 3, score: 5.84 },
    //   { student_id: 2, subject_id: 4, score: 96.49 },
    // ];
    // const res = await queryInterface.bulkInsert("scores", score, {});

    const students = await queryInterface.rawSelect(
      "students",
      {
        plain: false,
      },
      ["id"]
    );

    let subjects = await queryInterface.rawSelect(
      "subjects",
      {
        plain: false,
      },
      ["id"]
    );

    let scores = [];
    students.forEach((student) => {
      let date = new Date();
      subjects = subjects.sort(() => Math.random() - 0.5);
      return subjects.forEach((sub, i) => {
        const created = date.setDate(date.getDate() - i);

        const grade = Math.random() * 100;
        scores.push({
          student_id: student.id,
          subject_id: sub.id,
          score: grade > 40 ? grade : grade + 30,
          current: i == 0 ? true : false,
          createdAt: new Date(created),
          updatedAt: new Date(created),
        });
      });
    });

    const res = await queryInterface.bulkInsert("scores", scores, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("scores", null, {});
  },
};
