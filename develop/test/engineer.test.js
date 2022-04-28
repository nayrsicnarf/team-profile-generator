const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Does GitHub username return from getGithub()?", () => {
    const emp = new Engineer("Fry", 10, "email@email.com", "GitHubUsername");
    expect(emp.getGithub()).toBe("GitHubUsername");
});

test("Does Engineer retrun from getRole()?", () => {
  const emp = new Engineer("Fry", 10, "email@email.com", "GitHubUsername");
  expect(emp.getRole()).toBe("Engineer");
});

