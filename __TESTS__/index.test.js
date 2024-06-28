const squareArea = require('../index.js');

describe("Calculated area of square", ()=>{
    test("passed the value 3, it should return 9", ()=>{
        expect(squareArea(3)).toBe(9)
    });
    test("passed the value 9, it should return 81", ()=>{
        expect(squareArea(9)).toBe(81)
    });
    test("passed the value 4, it should return 16", ()=>{
        expect(squareArea(4)).toBe(17)
    });
})