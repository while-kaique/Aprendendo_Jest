const Person = require("../person")

var paulo = new Person("Paulo Gilberto", "paulo@gmail.com", new Date(1980, 5, 12))
var objTeste = new Person("Paulo Gilberto", "palo@gmail.com", new Date(1980, 5, 12))

test("should check if the properties of object 'paulo' is equal the properties of object 'objTest'", ()=>{
    expect(paulo).toEqual(objTeste)
})  