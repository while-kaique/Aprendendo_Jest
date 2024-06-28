class Product{
    description = 1;
    stock;
    constructor(fullName, name, birthday){
        this.fullName = fullName
        this.name = name
        this.birthday = birthday
    }
}

module.exports = { Product }