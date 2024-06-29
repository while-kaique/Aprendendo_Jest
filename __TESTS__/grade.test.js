const average = require("../grade.js")

describe("Checking student grades",()=>{
    test("shoud check if the average of the grades 4, 3 and 8 is less than 6", ()=>{
        expect(average(4, 3, 8)).toBeLessThan(6)
    })
    test("shoud check if the average of the grades 6, 6 and 5 is less than or equal to 6", ()=>{
        expect(average(6, 6, 6)).toBeLessThanOrEqual(6)
    })
})