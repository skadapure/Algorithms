let palindromePermutation = require("./").palindromePermutation;
describe("Palindrome Permutation", () => {
    it("easy case - true", () => {
        let str = "taco cat";
        expect(palindromePermutation(str)).toEqual(true);
    });
    it("easy case - false", () => {
        let str = "taco xcat";
        expect(palindromePermutation(str)).toEqual(false);
    });
    it("single character", () => {
        let str = "";
        expect(palindromePermutation(str)).toEqual(true);
    });
    it("blank", () => {
        let str = "";
        expect(palindromePermutation(str)).toEqual(true);
    });
    it("no odds", () => {
        let str = "taco cato";
        expect(palindromePermutation(str)).toEqual(true);
    });
    it("no evens", () => {
        let str = "abcdef";
        expect(palindromePermutation(str)).toEqual(false);
    });
    it("multiple odds", () => {
        let str = "abcdefgcbda";
        expect(palindromePermutation(str)).toEqual(false);
    });
});