let urlify = require("./");

describe("Urlify", () => {
    it("Simple string", () => {
        let str = "Mr John Smith     ";
        let n = 13;
        expect(urlify(str, n)).toEqual("Mr%20John%20Smith");
    });
    it("Simple string exact match with n", () => {
        let str = "Mr John Smith";
        let n = 13;
        expect(urlify(str, n)).toEqual("Mr%20John%20Smith");
    });
    it("no space", () => {
        let str = "MrJohnSmith";
        let n = 13;
        expect(urlify(str, n)).toEqual("MrJohnSmith");
    });
    it("space at the end", () => {
        let str = "MrJohnSmith    ";
        let n = 15;
        expect(urlify(str, n)).toEqual("MrJohnSmith%20%20%20%20");
    });
    
    it("space at the end", () => {
        let str = "MrJohnSmith    ";
        let n = 13;
        expect(urlify(str, n)).toEqual("MrJohnSmith%20%20");
    });
});