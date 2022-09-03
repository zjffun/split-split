import { expect } from "chai";
import { split } from "../src/index";

describe("split", () => {
  it("throw error if separator is invalid", () => {
    const splitTsAny = split as any;
    expect(() => splitTsAny("")).to.throw();
    expect(() => splitTsAny("", "")).to.throw();
    expect(() => splitTsAny("", 1)).to.throw();
    expect(() => splitTsAny("", null)).to.throw();
    expect(() => splitTsAny("", {})).to.throw();
    expect(() => splitTsAny("", true)).to.throw();
  });

  it("regexp multiple separators", () => {
    expect(split("split split\tsplit|split", /[ \t|]/g)).to.deep.equal([
      ["split", "split", "split", "split"],
      [" ", "\t", "|"],
    ]);
  });

  it("array multiple separators", () => {
    expect(split("split split\tsplit|split", [" ", "\t", "|"])).to.deep.equal([
      ["split", "split", "split", "split"],
      [" ", "\t", "|"],
    ]);
  });

  it("lookahead separators", () => {
    expect(
      split("split split\tsplit|split", /((((?=l)|[ \t|])))/g)
    ).to.deep.equal([
      ["sp", "lit", "sp", "lit", "sp", "lit", "sp", "lit"],
      ["", " ", "", "\t", "", "|", ""],
    ]);
  });
});
