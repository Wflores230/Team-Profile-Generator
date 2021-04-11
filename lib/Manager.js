const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`Employee office number is ${this.officeNumber}`)
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;