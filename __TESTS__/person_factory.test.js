const { Client, Employee } = require("../person.js")
const PersonFactory = require("../person_factory.js")

var factory = new PersonFactory()

describe("Factory of persons", ()=>{
    test("passed a string with the client value, it should return a new client object", 
        ()=>{
            expect(factory.getPerson("client")).toBeInstanceOf( Client )
        });
    test("passed a string with the employee value, it should return a new employee object", 
        ()=>{
            expect(factory.getPerson("employee")).toBeInstanceOf( Employee )
        })
})