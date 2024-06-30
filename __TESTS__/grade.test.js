const average = require("../grade.js")

var gradeOne
var gradeTwo
var gradeThree

beforeAll(()=>{
    console.log("Antes dos testes")
    gradeOne = 4
    gradeTwo = 8
    gradeThree = 7
})

afterEach(()=>{
    console.log("Após cada teste")
    gradeOne = 3
    gradeTwo = 5
    gradeThree = 4
})
afterAll(()=>{
    console.log("Após todos os testes")
    gradeOne = null
    gradeTwo = null
    gradeThree = null
})

describe("Checking averages of the grades", ()=>{
    test("should check if the average of the grades 4, 8 and 7 is greater or equal than 6",()=>{
        expect(average(gradeOne, gradeTwo, gradeThree)).toBeGreaterThanOrEqual(6)
    })
    test("should check if the average of the grades 3, 5 and 4 is less or equal than 6",()=>{
        expect(average(gradeOne, gradeTwo, gradeThree)).toBeLessThanOrEqual(6)
    })
})