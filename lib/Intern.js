const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool(){
        console.log(`Employee school is ${this.school}`);
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;