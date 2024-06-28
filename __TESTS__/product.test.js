const {Product} = require("../Product.js")

describe("Test of product information",
    ()=>{
        var product = new Product()
        test("should return that the stock property is undefined if product.stocks doesn't exists", 
            () => {
                expect(product.stock).toBeUndefined()
            })
        test("should return that the description property is defined if product.description exists", 
            () => {
                expect(product.description).toBeDefined()
            })
})