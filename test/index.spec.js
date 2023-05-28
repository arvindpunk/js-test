import { repeat } from "../src";
// const { repeat } = require("../src");

test("zero params", () => {
  expect(repeat((x) => 2, 1)).toStrictEqual([2]);
});

test("one params", () => {
  expect(repeat((x) => x * 2, 2, 10)).toStrictEqual([20, 20]);
});

test("multiple params", () => {
  expect(repeat((x, y) => x + y, 2, 10, 18)).toStrictEqual([28, 28]);
});

test("test repeat count zero", () => {
  expect(repeat((x, y) => x + y, 0, 10, 18)).toStrictEqual([]);
});
