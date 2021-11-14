// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
    been stored. If separator is a regular expression then
    inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding
es5id: 15.5.4.14_A4_T22
description: >
    Argument is regexp /\d+/, and instance is String("dfe23iu 34
    =+65--")
---*/

import { expect } from "chai";
import _String from "../../harness/string";

var __string = new _String("dfe23iu 34 =+65--");

var __re = /\d+/;

var __split = __string.split(__re);

var __expected = [
  ["dfe", "iu ", " =+", "--"],
  ["23", "34", "65"],
];

expect(__split).to.deep.equal(__expected);
