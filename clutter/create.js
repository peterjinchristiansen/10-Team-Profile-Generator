class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    };

    getId() {

    };

    getEmail() {

    };

    getRole() {

    };

}

class Manager extends Employee {
    constructor(name, id, email, office, job) {
        super(name, id, email);
        this.office = office;
        this.job = job;
    }

    getRole() {

    }

}

class Engineer extends Employee {
    constructor(name, id, email, github, job) {
        super(name, id, email);
        this.github = github;
        this.job = job;
    }

    getGithub() {

    }

    getRole() {

    }

}

class Intern extends Employee {
    constructor(name, id, email, school, job) {
        super(name, id, email);
        this.school = school;
        this.job = job;
    }

    getSchool() {

    }

    getRole() {

    }

}

module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern, Intern
}