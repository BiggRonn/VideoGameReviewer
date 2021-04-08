//Gathering data from user in models
const { User } = require("../models");
//Importing User data to allow functionality.
const userData = [
  {
    name: "Joe",
    email: "Test@test.com",
    password: "kittenss",
  },
  {
    name: "Moe",
    email: "Test2@test.com",
    password: "lordkitten",
  },
  {
    name: "bob",
    email: "test3@test.com",
    password: "tunafish",
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers