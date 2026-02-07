const add = require('../index');

test('1 + 2 が 3 になること', () => {
  expect(add(1, 2)).toBe(3);
});

test('失敗するテストの例', () => {
  expect(add(1, 1)).toBe(3);
});