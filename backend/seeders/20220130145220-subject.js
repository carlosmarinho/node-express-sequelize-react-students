"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "Mathematics",
          description: "Mathematics",
        },
        {
          name: "IT",
          description: "IT",
        },
        {
          name: "History",
          description: "History",
        },
        {
          name: "Physics",
          description: "Physics",
        },
        {
          name: "Chemistry",
          description: "Chemistry",
        },
      ],
      {}
    );
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
