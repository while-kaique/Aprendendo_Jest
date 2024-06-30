const division = require("../users.js")

describe("Checking exceptions of the division", ()=>{
    test("should check if the divider 0 return an error",()=>{
        expect(()=>{division(10, 0)}).toThrow()
    })
    test("shpuld check if another divider different from 0 doesn't return an error",()=>{
        expect(()=>{division(10, 2)}).not.toThrow()
    })
})