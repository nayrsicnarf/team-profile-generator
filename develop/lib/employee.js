class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getiD () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
    
    getRole () {
        return Employee.name;
    }

}
module.exports = Employee;