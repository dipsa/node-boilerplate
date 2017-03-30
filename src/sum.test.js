const sum = require('./sum')

test('sum returns the total of provided 2 numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
