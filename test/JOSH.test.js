const JOSH = require('../src/JOSH');
const css = "#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}";

test('No explicit target should be true', () => {
  expect(JOSH.parse(css)).toBeTruthy();
});

test('Target "head" should be true', () => {
  expect(JOSH.parse(css, "head")).toBeTruthy();
});

test('Target "body" should be true', () => {
  expect(JOSH.parse(css, "body")).toBeTruthy();
});

test('Target "test" should throw error', () => {
  expect(() => {
    JOSH.parse(css, "test");
  }).toThrow();
});

test('Target null should throw error', () => {
  expect(() => {
    JOSH.parse(css, null);
  }).toThrow();
});

test('Empty string should throw error', () => {
  expect(() => {
    JOSH.parse("");
  }).toThrow();
});

test('Empty object should throw error', () => {
  expect(() => {
    JOSH.parse({});
  }).toThrow();
});

test('Integer should throw error', () => {
  expect(() => {
    JOSH.parse(1337);
  }).toThrow();
});

test('Boolean should throw error', () => {
  expect(() => {
    JOSH.parse(true);
  }).toThrow();
});

test('Float should throw error', () => {
  expect(() => {
    JOSH.parse(13.37);
  }).toThrow();
});

test('Null should throw error', () => {
  expect(() => {
    JOSH.parse(null);
  }).toThrow();
});

test('Undefined should throw error', () => {
  expect(() => {
    JOSH.parse(undefined);
  }).toThrow();
});