const Intern = require('../lib/Intern');

describe('getSchool', () =>{
    it('it sets the school propety based on constructor argument', ()=> {
        const school = "getSchool";
        const intern = new Intern("Alan", 2, "test@gmail.com", school);
        expect(intern.school).toBe(school);
    });
});

describe('getRole', () =>{
    it('returns the Intern propety when the getRole() method is called', ()=> {
        const test = "Intern";
        const intern = new Intern("Alan", 2, "test@gmail.com", test);
        expect(intern.getRole()).toBe(test);
    });
});

describe('getSchool', () =>{
    it('returns the users school name when the getSchool() method is called', ()=> {
        const school = "getSchool";
        const intern = new Intern("Alan", 2, "test@gmail.com", school);
        expect(intern.getSchool()).toBe(school);
    });
});