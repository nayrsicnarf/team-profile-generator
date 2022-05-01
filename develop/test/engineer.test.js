const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Does GitHub username return from getGithub()?", () => {
    const emp = new Engineer("Fry", 10, "email@email.com", "GithubUsername");
    expect(emp.getGithub()).toBe("GithubUsername");
});

test("Does Engineer return from getRole()?", () => {
    const emp = new Engineer("Fry");
    expect(emp.getRole()).toBe("Engineer");
});

