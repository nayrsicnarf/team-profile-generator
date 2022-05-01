const Employee = require("../lib/Employee");

test("Does name return from getName()?", () => {
    const emp = new Employee("Fry");
    expect(emp.getName()).toBe("Fry");
});

test("Does id return from getId()?", () => {
    const emp = new Employee("Fry", 10);
    expect(emp.getId()).toBe(10);
});

test("Does email return from getEmail()", () => {
    const emp = new Employee("fry", 10, "email@email.com");
    expect(emp.getEmail()).toBe("email@email.com");
});

test("Does Employee return from getRole()?", () => {
    const emp = new Employee("Fry", 10, "email@email.com");
    expect(emp.getRole()).toBe("Employee");
});