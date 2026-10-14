const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 5 * 4 to equal 20', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
})

test('multiply -8.2 * 1 to equal -8.2', () => {
  expect(calculator.multiply(-8.2, 1)).toBe(-8.2);
})

test('divide 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
})

test('divide 100 / -5 to equal -20', () => {
  expect(calculator.divide(100, -5)).toBe(-20);
})

// Tarea 3: TDD para la función `divide()`

test('divide 2 / 0 to equal null', () => {
  expect(calculator.divide(2, 0)).toBe(null);
})