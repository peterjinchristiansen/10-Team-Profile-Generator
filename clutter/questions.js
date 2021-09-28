const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: `What is the team manager's name?'`
    },
    {
        type: "input",
        name: "id",
        message: `What is the team manager's ID?`
    },
    {
        type: "input",
        name: "email",
        message: `What is the team manager's e-mail?`
    },
    {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?"
    }
]




const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: `What is the engineer's name?'`
    },
    {
        type: "input",
        name: "id",
        message: `What is the engineer's ID?`
    },
    {
        type: "input",
        name: "email",
        message: `What is the engineer's e-mail?`
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub?"
    }
]




const internQuestions = [
    {
        type: "input",
        name: "name",
        message: `What is the intern's name?'`
    },
    {
        type: "input",
        name: "id",
        message: `What is the intern's ID?`
    },
    {
        type: "input",
        name: "email",
        message: `What is the intern's e-mail?`
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
]



const finalQuestion = [
    {
        type: "list",
        name: "continue",
        message: "Would you like to add another member?",
        choices: ["Add an engineer", "Add an intern", "I'm done"]
    }
]


module.exports = {
    manager: managerQuestions,
    engineer: engineerQuestions,
    intern: internQuestions,
    final: finalQuestion
}