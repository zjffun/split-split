import spliter from "./spliter";

export default (
  string: string,
  separator: Array<string> | RegExp
): [string[], string[]] => {
  const _spliter = spliter(separator);
  return _spliter(string);
};
