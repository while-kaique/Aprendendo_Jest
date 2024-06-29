const average = require("../grade.js")

describe("checking students grade",()=>{
    test("should check if the average of the grades 4, 3 and 6 is equal to 4.3", ()=>{
        expect(average(4, 3, 6)).toBeCloseTo(4.33, 1)
    })
})