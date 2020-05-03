const Calculator = require('../Calculator');

const calculator = new Calculator();
test('success cases', () => {
  expect(calculator.calc({ distance: 1, time: 0 })).toBe(6);
});

test('distance expection cases', () => {
  expect(() => calculator.calc(null, 0)).toThrow();
  expect(() => calculator.calc(undefined, 0)).toThrow();
  expect(() => calculator.calc('x', 0)).toThrow();
  expect(() => calculator.calc(0)).toThrow();
  expect(() => calculator.calc(-1, 0)).toThrow();
});

test('time expection cases', () => {
  expect(() => calculator.calc(1, null)).toThrow();
  expect(() => calculator.calc(1, undefined)).toThrow();
  expect(() => calculator.calc(1, 'x')).toThrow();
  expect(() => calculator.calc(1)).toThrow();
  expect(() => calculator.calc(1, -1)).toThrow();
});
