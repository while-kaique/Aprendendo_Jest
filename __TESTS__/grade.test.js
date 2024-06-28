const average = require("../grade.js")

describe("Checking student grade",()=>{
    test("shoud return true for grades 6, 7 and 5", ()=>{
        expect(average(6, 7, 5)).toBeTruthy()
    })
    test("shoud return false for grades 5, 7 and 5", ()=>{
        expect(average(5, 7, 5)).toBeFalsy()
    })
})