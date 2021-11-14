// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split() returns an Array object with:
    i) length equaled to 1,
    ii) [[Get]](0) equaled to the result of converting this object to a string
es5id: 15.5.4.14_A3_T1
description: Instance is String("one,two,three,four,five")
---*/

import { expect } from "chai";
import _String from "../../harness/string";

var __string = new _String("one,two,three,four,five");

var __split = __string.split(/,/g);

var __expected = [
  ["one", "two", "three", "four", "five"],
  [",", ",", ",", ","],
];

expect(__split).to.deep.equal(__expected);
