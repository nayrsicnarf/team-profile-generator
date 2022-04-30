const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];

// .then(function (answers) {
//     const manager = new Manager(answers.name);
//     teamArray.push(manager);
// });