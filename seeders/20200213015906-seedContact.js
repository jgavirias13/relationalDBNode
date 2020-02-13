"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Juan Pablo",
        lastname: "Gaviria",
        phone: "2060856",
        email: "jgavirias13@gmail.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: "Miguel",
        lastname: "Gaviria",
        phone: "34342929",
        email: "elmigue@hotmail.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: "Carolina",
        lastname: "Gaviria",
        phone: "3938484",
        email: "cgavir25@gmail.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
