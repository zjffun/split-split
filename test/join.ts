import { expect } from "chai";
import { join } from "../src/index";

describe("join", () => {
  it("substrings length great then separators length", () => {
    const substrings = ["h", "e", "l", "l", "o"];
    const separators = [" ", ","];

    expect(join(substrings, separators)).is.eq("h e,llo");
  });

  it("substrings length less then separators length", () => {
    const substrings = ["h", "e", "l", "l", "o"];
    const separators = [",", "|", ",", "|", ",", "|", ","];

    expect(join(substrings, separators)).is.eq("h,e|l,l|o");
  });

  it("separators is empty array", () => {
    const substrings = ["h", "e", "l", "l", "o"];
    const separators = [];

    expect(join(substrings, separators)).is.eq("hello");
  });

  it("separators is not array", () => {
    const substrings = ["h", "e", "l", "l", "o"];
    const separators = ",";

    expect(join(substrings, separators)).is.eq("h,e,l,l,o");
  });
});
