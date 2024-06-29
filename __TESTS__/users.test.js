const users = require("../users.js")

describe("Checking length of items of array", ()=>{
    test("should check if array has 3 items",()=>{
        expect(users).toHaveLength(3)
    })
    test("should check if the index of item 3 is 3 or 4 characters wide", ()=>{
        expect(users[2]).toHaveLength(5)
    })
})