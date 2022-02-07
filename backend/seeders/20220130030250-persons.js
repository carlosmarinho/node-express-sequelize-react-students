"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "persons",
      [
        {
          username: "johndoe",
          first_name: "John",
          last_name: "Doe",
          email: "johndoe@gmail.com",
          password: "123456",
        },
        {
          username: "carlosmarinho",
          first_name: "Carlos",
          last_name: "Marinho",
          email: "cmarinho@gmail.com",
          password: "123456",
        },
        {
          username: "cadu",
          first_name: "Carlos Eduardo",
          last_name: "Silva",
          email: "ces@gmail.com",
          password: "123456",
        },
        {
          username: "eloahfranca",
          first_name: "Eloah",
          last_name: "França",
          email: "eloahfranca@gmail.com",
          password: "123456",
        },
        {
          username: "manu",
          first_name: "Manuela",
          last_name: "Pereira",
          email: "manupereira@gmail.com",
          password: "123456",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("persons", null, {});
  },
};
