const create = require('./create');

const Employee = create.Employee;
const Manager = create.Manager;
const Engineer = create.Engineer;
const Intern = create.Intern;

test('Employee Functions', () => {
    const myName = "Jim";
    const myId = 4;
    const myEmail = "jim@jimail.com";
    const newEmployee = new Employee(myName, myId, myEmail);

    expect(newEmployee.getRole()).toBe("Employee");
    expect(newEmployee.getName()).toBe(myName);
    expect(newEmployee.getId()).toBe(myId);
    expect(newEmployee.getEmail()).toBe(myEmail);
})


test('Manager Functions', () => {
    const myName = "Ayo";
    const myId = 24;
    const myEmail = "ayo@ayo-l.com";
    const myOffice = "third door on the left";

    const newManager = new Manager(myName, myId, myEmail, myOffice);

    expect(newManager.getRole()).toBe("Manager");
    expect(newManager.getOffice()).toBe(myOffice);
})


test('Engineer Functions', () => {
    const myName = "Huh";
    const myId = 27;
    const myEmail = "huh@huhtmail.com";
    const myGithub = "githuhb";

    const newEngineer = new Engineer(myName, myId, myEmail, myGithub);

    expect(newEngineer.getRole()).toBe("Engineer");
    expect(newEngineer.getGithub()).toBe(myGithub);
})


test('Intern Functions', () => {
    const myName = "Who";
    const myId = 99;
    const myEmail = "who@ya-who.com";
    const mySchool = "harvard, trust me";

    const newIntern = new Intern(myName, myId, myEmail, mySchool);

    expect(newIntern.getRole()).toBe("Intern");
    expect(newIntern.getSchool()).toBe(mySchool);
})