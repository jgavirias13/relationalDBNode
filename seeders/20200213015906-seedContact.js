"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Juan Pablo",
        lastname: "Gaviria",
        phone: "2060856",
        email: "jgavirias13@gmail.com",
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },
      {
        firstname: "Miguel",
        lastname: "Gaviria",
        phone: "34342929",
        email: "elmigue@hotmail.com",
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      },
      {
        firstname: "Carolina",
        lastname: "Gaviria",
        phone: "3938484",
        email: "cgavir25@gmail.com",
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
