const unroll = require("./unroll");

describe("unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 square array", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(unroll(square)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it("unrolls a 3x3 square array", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    expect(unroll(smallerSquare)).toEqual([
      "a",
      "b",
      "c",
      "f",
      "i",
      "h",
      "g",
      "d",
      "e",
    ]);
  });

  it("handles an empty array", function () {
    expect(unroll([])).toEqual([]);
  });

  it("unrolls a 1x1 square array", function () {
    expect(unroll([[42]])).toEqual([42]);
  });

  it("unrolls a 2x2 square array", function () {
    const tinySquare = [
      [1, 2],
      [3, 4],
    ];
    expect(unroll(tinySquare)).toEqual([1, 2, 4, 3]);
  });
});
