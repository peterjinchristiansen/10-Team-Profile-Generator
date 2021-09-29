const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./clutter/questions');
const managerQ = questions.manager;
const engineerQ = questions.engineer;
const internQ = questions.intern;
const finalQ = questions.final;

const create = require('./clutter/create/create');
const createMan = create.Manager;
const createEng = create.Engineer;
const createInt = create.Intern;

const template = require('./clutter/template')

const myTeam = [];

function askManager() {
    inquirer.prompt(managerQ).then(data => {
        var manager = "Manager"
        var newMan = new createMan(data.name, data.id, data.email, data.office, manager)
        myTeam.push(newMan);
        bridgeFunction();
    })
}

function askEngineer() {
    inquirer.prompt(engineerQ).then(data => {
        var engineer = 'Engineer';
        var newEng = new createEng(data.name, data.id, data.email, data.github, engineer)
        myTeam.push(newEng);
        bridgeFunction();
    });
}

function askIntern() {
    inquirer.prompt(internQ).then(data => {
        var intern = 'Intern';
        var newInt = new createInt(data.name, data.id, data.email, data.school, intern)
        myTeam.push(newInt);
        bridgeFunction();
    });
}

function bridgeFunction() {
    inquirer.prompt(finalQ).then(data => {
        if(data.continue === "Add an engineer") {
            askEngineer();
        } else if (data.continue === "Add an intern") {
            askIntern();
        } else {
            createPage();
        }
    })
}


function createPage() {
    fs.writeFileSync('employees.html', template(myTeam))
}

askManager();

module.exports = bridgeFunction;