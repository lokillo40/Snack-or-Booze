const unroll = require("./unroll");

describe("#unroll", () => {

    it("is a function", () => {
        expect(typeof unroll).toEqual("function");
    });

    it("unrolls matrices correctly", () => {
        expect(unroll([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ])).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);

        expect(unroll([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

        expect(unroll([
            [1, 2],
            [3, 4]
        ])).toEqual([1, 2, 4, 3]);
    });

    it("returns an empty array for an empty matrix", () => {
        expect(unroll([])).toEqual([]);
    });

});


