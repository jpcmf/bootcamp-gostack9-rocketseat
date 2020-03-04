function soma(a, b) {
  return a + b;
}

test('if i call soma function passing 4 and 5 the final result should be 9', () => {
  const result = soma(4, 5);
  expect(result).toBe(9);
});
