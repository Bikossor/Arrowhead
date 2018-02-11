const JOSH = require('../src/JOSH');
const testCSS = "#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}";

test('No explicit target should be undefined', () => {
  expect(JOSH.parse(testCSS)).toBeUndefined();
});

test('Target "head" should be undefined', () => {
  expect(JOSH.parse(testCSS, "head")).toBeUndefined();
});

test('Target "body" should be undefined', () => {
  expect(JOSH.parse(testCSS, "body")).toBeUndefined();
});

test('Target "test" should be false', () => {
  expect(JOSH.parse(testCSS, "test")).toBeFalsy();
});

test('Empty string should be false', () => {
  expect(JOSH.parse("")).toBeFalsy();
});

test('Empty object should be false', () => {
  expect(JOSH.parse({})).toBeFalsy();
});

test('Integer should be false', () => {
  expect(JOSH.parse(1337)).toBeFalsy();
});

test('Boolean should be false', () => {
  expect(JOSH.parse(true)).toBeFalsy();
});

test('Float should be false', () => {
  expect(JOSH.parse(13.37)).toBeFalsy();
});