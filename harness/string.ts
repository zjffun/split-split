import { split } from "../src/index";

class _String {
  str: String;

  constructor(...args) {
    this.str = new String(...args);
  }

  split(re) {
    const splitTsAny = split as any;
    return splitTsAny(this.str, re);
  }
}

Object.setPrototypeOf(_String, String.prototype);

export default _String;
