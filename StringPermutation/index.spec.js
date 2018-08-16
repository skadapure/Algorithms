let stringPermutation = require("./");

describe.only("String Permutation", () => {
    it("Different string lengths", () => {
        let a = "abcdef";
        let b = "abcdefg";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - additional character in b", () => {
        let a = "abcdef";
        let b = "afbedcx";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - additional character in a", () => {
        let a = "abcdefx";
        let b = "afbedc";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - missing character in b", () => {
        let a = "abcdef";
        let b = "afbed";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - missing character in a", () => {
        let a = "abcde";
        let b = "afbedf";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - duplicate character", () => {
        let a = "abcdefa";
        let b = "afbedc";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - b is empty", () => {
        let a = "abcdefa";
        let b = "";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Not a permutation - a is empty", () => {
        let a = "";
        let b = "abcdefa";
        expect(stringPermutation(a, b)).toEqual(false);
    });

    it("Is a permutation", () => {
        let a = "abcdef";
        let b = "afbedc";
        expect(stringPermutation(a, b)).toEqual(true);
    });

    it("Is a permutation - duplicate character", () => {
        let a = "abcdefa";
        let b = "afbaedc";
        expect(stringPermutation(a, b)).toEqual(true);
    });

    it("Is a permutation - both empty", () => {
        let a = "";
        let b = "";
        expect(stringPermutation(a, b)).toEqual(true);
    });
});