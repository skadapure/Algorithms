let isUnique = require("./");

describe("Does the string have unique characters", () => {
    it("With duplicate characters", () => {
        let str= "shaakti"
        expect(isUnique(str)).toEqual(false);
    });
    it("With unique characters", () => {
        let str= "shakti"
        expect(isUnique(str)).toEqual(true);
    });
});