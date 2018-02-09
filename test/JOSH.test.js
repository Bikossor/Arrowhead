const JOSH = require('../src/JOSH');
const testCSS = "#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}";


test('No explicit target should be undefined', () => {
  expect(JOSH.parse(testCSS)).toBeUndefined();
});

test('"head" target should be undefined', () => {
  expect(JOSH.parse(testCSS, "head")).toBeUndefined();
});

test('"body" target should be undefined', () => {
  expect(JOSH.parse(testCSS, "body")).toBeUndefined();
});

test('"test" target should be false', () => {
  expect(JOSH.parse(testCSS, "test")).toBeFalsy();
});

test('Empty string should be false', () => {
  expect(JOSH.parse("")).toBeFalsy();
});

test('Empty object should be false', () => {
  expect(JOSH.parse({})).toBeFalsy();
});