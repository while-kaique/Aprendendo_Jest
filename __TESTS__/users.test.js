const users = require("../users.js")

describe("Checking items of array", ()=>{
    test("should check if the array contain the user Maria",()=>{
        expect(users).toContain("Breno")
    })
    test("should check if the array does not contain the user Cagão", ()=>{
        expect(users[2]).not.toContain("Cagão")
    })
})