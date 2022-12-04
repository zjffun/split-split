[![jsdelivr][jsdelivr-badge]][jsdelivr-link]
[![npm version][fury-badge]][fury-link]
[![codecov][codecov-badge]][codecov-link]

# [split-split][split-split]

Split string and keep separators.

## Installation

npm

```sh
npm install split-split
```

## Usage

ESM:

```js
import { split, join } from "split-split";
const [substrings, separators] = split("split split\tsplit|split", [
  " ",
  "\t",
  "|",
]);
console.log(substrings, separators); // => ["split", "split", "split", "split"] [" ", "\t", "|"]

const str = join(substrings, separators);
console.log(str); // => "split split\tsplit|split"
```

CJS:

```js
const { split, join } = require("split-split");
const [substrings, separators] = split("split split\tsplit|split", [
  " ",
  "\t",
  "|",
]);
console.log(substrings, separators); // => ["split", "split", "split", "split"] [" ", "\t", "|"]

const str = join(substrings, separators);
console.log(str); // => "split split\tsplit|split"
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/split-split@0.0.2"></script>
<script>
  const { split, join } = splitSplit;

  const [substrings, separators] = split("split split\tsplit|split", [
    " ",
    "\t",
    "|",
  ]);
  console.log(substrings, separators); // => ["split", "split", "split", "split"] [" ", "\t", "|"]

  const str = join(substrings, separators);
  console.log(str); // => "split split\tsplit|split"
</script>
```

## API

### `split(string, separator)`

The `split()` method divides the given string into an ordered list of substring, puts these substrings into an array, and returns the substrings array **and separators array**. The division is done by searching for a pattern; where the pattern is provided as the second parameter in the method's call.

#### Example

```js
const [substrings1, separators1] = split("split split\tsplit|split", [
  " ",
  "\t",
  "|",
]);
console.log(substrings1, separators1); // => ["split", "split", "split", "split"] [" ", "\t", "|"]

const [substrings2, separators2] = split("split split\tsplit|split", /[ \t|]/g);
console.log(substrings2, separators2); // => ["split", "split", "split", "split"] [" ", "\t", "|"]
```

#### Parameters

- `string` (`string`) — String being split.
- `separator` (`Array<string> | RegExp`) - Separator to divide the given string.

#### Returns

An array, the first item is an array of substrings, the second item is an array of separators.

### `join(substrings, separators)`

The `join()` method creates and returns a new string by concatenating all of the elements in substrings, separated by separators.

#### Example

```js
const string = join(["split", "split", "split", "split"], [" ", "\t", "|"]);
console.log(string); // => "split split\tsplit|split"
```

#### Parameters

- `strings` (`Array<string>`) — Substrings being join.
- `separators` (`Array<string>`) - Separators being join.

#### Returns

A string consisting of the separators inserted into the substrings.

## [Release Notes](./CHANGELOG.md)

<!-- Definitions -->

[split-split]: https://zjffun.github.io/split-split/
[fury-link]: https://badge.fury.io/js/split-split
[fury-badge]: https://badge.fury.io/js/split-split.svg
[jsdelivr-link]: https://www.jsdelivr.com/package/npm/split-split
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/split-split/badge
[codecov-badge]: https://codecov.io/gh/zjffun/split-split/branch/main/graph/badge.svg
[codecov-link]: https://codecov.io/gh/zjffun/split-split
