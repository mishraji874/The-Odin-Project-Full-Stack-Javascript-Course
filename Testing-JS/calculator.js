const calculator = Object.freeze({
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
      throw Error('Cannot divide by 0');
    }

    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
});

export default calculator;