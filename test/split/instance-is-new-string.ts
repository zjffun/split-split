// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    String.prototype.split() returns an Array object with:
    i) length equaled to 1,
    ii) [[Get]](0) equaled to the result of converting this object to a string
es5id: 15.5.4.14_A3_T10
description: Instance is new _String
---*/

import { expect } from "chai";
import _String from "../../harness/string";

var __string = new _String();

var __split = __string.split(new RegExp(""));

var __expected = [[""], []];

expect(__split).to.deep.equal(__expected);
