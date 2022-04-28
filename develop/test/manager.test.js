const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Does officeNumber return from getOfficeNumber()?", () => {
    const emp = new Manager("Fry", 10, "email@email.com", 101);
    expect(emp.getGithub()).toBe(101);
});

test("Does Manager retrun from getRole()?", () => {
  const emp = new Manager("Fry", 10, "email@email.com", 101);
  expect(emp.getRole()).toBe("Manager");
});

