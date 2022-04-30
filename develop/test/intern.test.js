const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Does getSchool() return school?", () => {
    const emp = new Intern("Fry", 10, "email@email.com", "WSU");
    expect(emp.getSchool()).toBe("WSU");
});

test("Does Intern return from getRole()?", () => {
    const emp = new Intern("Fry", 10, "email@email.com", "WSU");
    expect(emp.getRole()).toBe("Intern");
});