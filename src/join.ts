export default (substrings, separators) => {
  if (Array.isArray(separators)) {
    let result = "";
    for (let i = 0; i < substrings.length - 1; i++) {
      const separator = separators[i] !== undefined ? separators[i] : "";
      result += `${substrings[i]}${separator}`;
    }
    result += substrings[substrings.length - 1];
    return result;
  }
  return substrings.join(separators);
};
