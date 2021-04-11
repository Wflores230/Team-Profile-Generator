const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('returns an object that is an instance of the Employee class when called with the new keyword', () => {
            const employee = new Employee();
            expect(employee instanceof Employee).toBe(true);
        });

        it('it sets the name propety based on constructor argument', () => {
            const name = "Giselle";
            const employee = new Employee(name);
    
            expect(employee.name).toBe(name);
        });
    
        it('it sets the id propety based on constructor argument', () => {
            const id = 1;
            const employee = new Employee("", id);
    
            expect(employee.id).toBe(id);
        });
    
        it('it sets the email propety based on constructor argument', () => {
            const email = 'giselle123@gmail.com';
            const employee = new Employee("", 0, email);
    
            expect(employee.email).toBe(email);
        });
    });

    describe('getName', () => {
        it('returns the name propety when the getName() method is called', ()=> {
            const name = "Obi";
            const employee = new Employee(name);
    
            expect(employee.getName()).toBe(name);
        });
    });
    
    describe('getId', () => {
        it('returns the id propety when the getId() method is called', ()=> {
            const Id = 1;
            const employee = new Employee("", Id);
    
            expect(employee.getId()).toBe(Id);
        });
    });
    
    describe('getEmail', () => {
        it('returns the email propety when the getEmail() method is called', ()=> {
            const email = 'giselle123@gmail.com';
            const employee = new Employee("", 0, email);
    
            expect(employee.getEmail()).toBe(email);
        });
    });
    
    describe('getRole', () => {
        it("returns 'Employee' propety when the getRole() method is called", ()=> {
            const employee = new Employee();
    
            expect(employee.getRole()).toBe('Employee');
        });
    });
    
})


