class Employee{
    fullName;
    name;
    birthday;
    constructor(fullName, name, birthday){
        this.fullName = fullName
        this.name = name
        this.birthday = birthday
    }
}
class Client{
    fullName;
    name;
    birthday;
    constructor(fullName, name, birthday){
        this.fullName = fullName
        this.name = name
        this.birthday = birthday
    }
}

module.exports = {Client, Employee}