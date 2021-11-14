import spliter from "./spliter";

export default (string, separator) => {
  const _spliter = spliter(separator);
  return _spliter(string);
};
