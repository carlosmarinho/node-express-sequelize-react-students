"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const people = await queryInterface.rawSelect(
      "persons",
      {
        limit: 5,
        plain: false,
      },
      ["id"]
    );

    const students = people.map((person, i) => {
      return {
        person_id: person.id,
        school_register: i + 1 * 1000 + person.id,
      };
    });

    await queryInterface.bulkInsert("students", students);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("students", null, {});
  },
};
