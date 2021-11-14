// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.split
description: Separator is a regexp
info: |
  String.prototype.split ( separator, limit )

  If separator is neither undefined nor null, then
    Let splitter be ? GetMethod(separator, @@split).
    If splitter is not undefined, then
      Return ? Call(splitter, separator, « O, limit »).

  RegExp.prototype [ @@split ] ( string, limit )

  Let C be ? SpeciesConstructor(rx, %RegExp%).

includes: [compareArray.js]
---*/
import { expect } from "chai";
import _String from "../../harness/string";

expect(new _String("x").split(/^/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/$/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/.?/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/.*/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/.+/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/.*?/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/.{1}/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/.{1,}/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/.{1,2}/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/()/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/./)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/(?:)/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/(...)/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/(|)/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/[]/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/[^]/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/[.-.]/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\0/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\b/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\B/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\d/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\D/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/\n/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\r/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\s/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\S/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/\v/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\w/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/\W/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\k<x>/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\xA0/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\XA0/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\ddd/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\cY/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/[\b]/)).to.deep.equal([["x"], []]);
expect(new _String("x").split(/\x/)).to.deep.equal([["", ""], ["x"]]);
expect(new _String("x").split(/\X/)).to.deep.equal([["x"], []]);
