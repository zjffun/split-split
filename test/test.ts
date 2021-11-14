import { expect } from "chai";
import { split, join } from "../src/index";

it("split is a function", () => {
  expect(split).is.an("function");
});

it("join is a function", () => {
  expect(join).is.an("function");
});
