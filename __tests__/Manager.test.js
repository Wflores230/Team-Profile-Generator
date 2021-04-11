const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('getOfficeNumber', () =>{
    it('it sets the office number propety based on constructor argument', ()=> {
        const office = "getOfficeNumber";
        const manager = new Manager("Juan", 3, "test@gmail.com", office);
        expect(manager.officeNumber).toBe(office);
    });
});

describe('getRole', () =>{
    it('returns the Manager propety when the getRole() method is called', ()=> {
        const test = "Manager";
        const manager = new Manager("Juan", 3, "test@gmail.com", test);
        expect(manager.getRole()).toBe(test);
    });
});

describe('getOfficeNumber', () =>{
    it('returns the users office number when the getSchool() method is called', ()=> {
        const office = "getOfficeNumber";
        const manager = new Manager("Juan", 3, "test@gmail.com", office);
        expect(manager.getOfficeNumber()).toBe(office);
    });
});