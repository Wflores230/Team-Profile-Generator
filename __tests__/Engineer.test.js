const Engineer = require('../lib/Engineer');

describe('getGithub', () =>{
    it('it sets the github account propety based on constructor argument', ()=> {
        const test = "getGithub";
        const engineer = new Engineer("Travis", 1, "test@gmail.com", test);
        expect(engineer.github).toBe(test);
    });
});

describe('getRole', () =>{
    it('returns the Engineer propety when the getRole() method is called', ()=> {
        const test = "Engineer";
        const engineer = new Engineer("Travis", 1, "test@gmail.com", test);
        expect(engineer.getRole()).toBe(test);
    });
});

describe('getGitHub', () =>{
    it('returns the github usersname when the getGitHub() method is called', ()=> {
        const test = "gitHubUser";
        const engineer = new Engineer("Travis", 1, "test@gmail.com", test);
        expect(engineer.getGithub()).toBe(test);
    });
});