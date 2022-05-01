const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Does officeNumber return from getOfficeNumber()?", () => {
    const emp = new Manager("Fry", 10, "email@email.com", 101);
    expect(emp.getOfficeNumber()).toBe(101);
});

test("Does Manager return from getRole()?", () => {
    const emp = new Manager("Fry");
    expect(emp.getRole()).toBe("Manager");
});

