class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };

}

class Manager extends Employee {
    constructor(name, id, email, office, job) {
        super(name, id, email);
        this.office = office;
        this.job = job;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }

}

class Engineer extends Employee {
    constructor(name, id, email, github, job) {
        super(name, id, email);
        this.github = github;
        this.job = job;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

class Intern extends Employee {
    constructor(name, id, email, school, job) {
        super(name, id, email);
        this.school = school;
        this.job = job;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}

module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern,
}