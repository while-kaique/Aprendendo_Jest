const average = require("../grade.js")

describe("Checking student grades",()=>{
    test("shoud check if the average of the grades 7, 7 and 8 is greater than 6", ()=>{
        expect(average(7, 7, 8)).toBeGreaterThan(6)
    })
    test("shoud check if the average of the grades 6, 6 and 6 is greater than or equal to 6", ()=>{
        expect(average(6, 6, 6)).toBeGreaterThanOrEqual(6)
    })
})