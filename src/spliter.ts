function escapeRegex(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function isRegexp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}

export default (separator: Array<string> | RegExp) => {
  let _separator = separator;

  if (Array.isArray(_separator)) {
    const separators = _separator
      .map((s) => {
        return escapeRegex(`${s}`);
      })
      .join("");

    _separator = new RegExp(`[${separators}]`, "g");
  } else if (isRegexp(_separator)) {
    if (!_separator.global) {
      _separator = new RegExp(_separator, "g");
    }
  } else {
    throw Error("Invalid separator, separator must be Array or RegExp");
  }

  return (str) => {
    const matchResult = str.matchAll(_separator);
    let lastEnd = 0;
    const arr0 = [];
    const arr1 = [];
    for (const m of matchResult) {
      if (m[0].length === 0 && (m.index === 0 || m.index >= str.length)) {
        continue;
      }
      arr0.push(str.substring(lastEnd, m.index));
      lastEnd = m.index + m[0].length;
      arr1.push(str.substring(m.index, lastEnd));
    }
    arr0.push(str.substring(lastEnd));
    return [arr0, arr1];
  };
};
