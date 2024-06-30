const users = require("../users.js")

describe("Checking items of the array users", ()=>{
    test("should check if the array contain all the items in another array",()=>{
        var expectArray = ["Thomas", "Breno"]
        expect(users).toEqual(expect.arrayContaining(expectArray))
    })
})