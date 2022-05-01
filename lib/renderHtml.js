const path = require("path");
const fs = require("fs");

const tempsDir = path.resolve(__dirname, "../src");

const render = employees => {
    const html = [];

    html.push(...employees.filter(employee => employee.getRole() === "Manager")
        .map(manager => managerRender(manager))
    );
    html.push(...employees.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerRender(engineer))
    );
    html.push(...employees.filter(employee => employee.getRole() === "Intern")
        .map(intern => internRender(intern))
    );

    return mainRender(html.join(""));
};

const managerRender = manager => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "manager.html"), "utf8");
    temp = replaceContent(temp, "name", manager.getName());
    temp = replaceContent(temp, "role", manager.getRole());
    temp = replaceContent(temp, "email", manager.getEmail());
    temp = replaceContent(temp, "id", manager.getId());
    temp = replaceContent(temp, "officeNumber", manager.getOfficeNumber());
    return temp;
};

const engineerRender = engineer => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "engineer.html"), "utf8");
    temp = replaceContent(temp, "name", engineer.getName());
    temp = replaceContent(temp, "role", engineer.getRole());
    temp = replaceContent(temp, "email", engineer.getEmail());
    temp = replaceContent(temp, "id", engineer.getId());
    temp = replaceContent(temp, "github", engineer.getGithub());
    return temp;
};

const internRender = intern => {
    let temp = fs.readFileSync(path.resolve(tempsDir, "intern.html"), "utf8");
    temp = replaceContent(temp, "name", intern.getName());
    temp = replaceContent(temp, "role", intern.getRole());
    temp = replaceContent(temp, "email", intern.getEmail());
    temp = replaceContent(temp, "id", intern.getId());
    temp = replaceContent(temp, "school", intern.getSchool());
    return temp;
};

const mainRender = html => {
    const temp = fs.readFileSync(path.resolve(tempsDir, "index.html"), "utf8");
    return replaceContent(temp, "team", html);
};

const replaceContent = (temp, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return temp.replace(pattern, value);
};

module.exports = render;