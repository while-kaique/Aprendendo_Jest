const PersonFactory = require("../person_factory.js")

var factory = new PersonFactory()

describe("Factory of person", ()=>{
    test("not passing a parameter, should return null", 
        ()=>{
            expect(factory.getPerson()).toBeNull()
        });
    test("passing a invalid value in parameters, should return null", 
        ()=>{
            expect(factory.getPerson("admin")).toBeNull()
        });
})