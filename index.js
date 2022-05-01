const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// // these paths are used in fs.writeFile to target the correct folder locations
const dist_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(dist_DIR, "myTeam.html");
// // render is used to create the html dist
const render = require("./lib/renderHtml");

const validateString = async input => {
    if (input.trim() === "" || !isNaN(input.trim())) {
        return "That is not a valid response. Please try again.";
    } else {
        return true;
    }
}

const validateNumber = async input => {
    if (input.trim() === "" || isNaN(input.trim())) {
        return "That is not a valid number. Please try again.";
    } else {
        return true;
    }
}

const validateEmail = async input => {
    if (!input.trim().includes("@") || !input.trim().includes(".com") && !input.trim().includes(".edu")) {
        return "That is not a valid email address. Please try again.";
    } else {
        return true;
    }
}

const managerQuestions = [{
    type: "input",
    message: "What is the name of the manager?",
    name: "managerName",
    validate: validateString
},
{
    type: "input",
    message: "What is the ID number of the manager?",
    name: "managerId",
    validate: validateNumber
},
{
    type: "input",
    message: "What is the email address of the manager?",
    name: "managerEmail",
    validate: validateEmail
},
{
    type: "input",
    message: "What is the office number of the manager?",
    name: "managerOfficeNumber",
    validate: validateNumber
},
{
    type: "confirm",
    message: "Do you want to add any more employees?",
    name: "addBool",
    default: true
}];

const addEmployee = [{
    type: "list",
    message: "What kind of role do you want to add?",
    choices: ["Engineer", "Intern", "None"],
    name: "teamMember"
}];

const engineerQuestions = [{
    type: "input",
    message: "What is the name of the engineer?",
    name: "engineerName",
    validate: validateString
},
{
    type: "input",
    message: "What is the ID number of the engineer?",
    name: "engineerId",
    validate: validateNumber
},
{
    type: "input",
    message: "What is the email address of the engineer?",
    name: "engineerEmail",
    validate: validateEmail
},
{
    type: "input",
    message: "What is the GitHub username of the engineer?",
    name: "engineerGitHub",
    validate: validateString
},
{
    type: "confirm",
    message: "Do you want to add any more employees?",
    name: "addBool",
    default: true
}];

const internQuestions = [{
    type: "input",
    message: "What is the name of the intern?",
    name: "internName",
    validate: validateString
},
{
    type: "input",
    message: "What is the ID number of the intern?",
    name: "internId",
    validate: validateNumber
},
{
    type: "input",
    message: "What is the email address of the intern?",
    name: "internEmail",
    validate: validateEmail
},
{
    type: "input",
    message: "What school is the intern currently attending?",
    name: "internSchool",
    validate: validateString
},
{
    type: "confirm",
    message: "Do you want to add any more employees?",
    name: "addBool",
    default: true
}];

const dist = [];
const init = () => {
    inquirer.prompt(managerQuestions).then(response => {
        response.managerName = capLetters(response.managerName);
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
        dist.push(manager);
        if (response.addBool) {
            addEmployeeFunc();
        } else {
            renderOut();
        }
    })
}

const addEmployeeFunc = () => {
    inquirer.prompt(addEmployee).then(response => {
        if (response.teamMember === "Engineer") {
            engineer();
        } else if (response.teamMember === "Intern") {
            intern();
        } else {
            renderOut();
        }
    })
}

const engineer = () => {
    inquirer.prompt(engineerQuestions).then(response => {
        response.engineerName = capLetters(response.engineerName);
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)
        dist.push(engineer);
        if (response.addBool) {
            addEmployeeFunc();
        } else {
            renderOut();
        }
    })
}

const intern = () => {
    inquirer.prompt(internQuestions).then(response => {
        response.internName = capLetters(response.internName);
        response.internSchool = capLetters(response.internSchool);
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        dist.push(intern);
        if (response.addBool) {
            addEmployeeFunc();
        } else {
            renderOut();
        }
    })
}

const renderOut = () => {
    const renderdist = render(dist);
    fs.writeFile(distPath, renderdist, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

const capLetters = str => {
    let arrayStr = str.split(" ");
    let capLetter = "";
    let newString = "";
    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i].toLowerCase() === "of") {
            newString += "of ";
        } else {
            capLetter = arrayStr[i][0].toUpperCase();
            newString += capLetter + arrayStr[i].slice(1, arrayStr[i].length).toLowerCase() + " ";
        }
    }
    return newString.trim();
}

init();