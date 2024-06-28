const { Employee, Client } = require("./person.js");

module.exports = class PersonFactory{
    getPerson(type){
        if (type === undefined){
            return null;
        };

        switch (type.toLowerCase()){
            case 'employee':
                return new Employee();
            case 'client': 
                return new Client();
            default:
                return null;
        };
    };
};