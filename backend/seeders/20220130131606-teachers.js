"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const teacherId = await queryInterface.bulkInsert(
      "persons",
      [
        {
          username: "rafaelsilva",
          first_name: "Rafael",
          last_name: "Silva",
          email: "rafaelsilva@gmail.com",
          password: "123456",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert("teachers", [
      { person_id: teacherId, employee_register: teacherId + 1000 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
