import { describe, expect, test } from '@jest/globals';

import calculator from './calculator.js';

describe('calculator', () => {
  test('adds 1 and 2 to be 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('adds 0.2 and 0.6 to be 0.8', () => {
    expect(calculator.add(0.2,0.6)).toBeCloseTo(0.8);
  });
  test('subtracts 3 from 5 to be 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('subtracts 0.4 from 0.1 to be -0.3', () => {
    expect(calculator.subtract(0.1, 0.4)).toBeCloseTo(-0.3);
  });
  test('multiplies 3 and 5 to be 15', () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });
  test('multiplies 0.155 and 5.32 to be 0.8246', () => {
    expect(calculator.multiply(0.155, 5.32)).toBeCloseTo(0.8246);
  });
  test('divides by 0 to throw Error', () => {
    expect(() => calculator.divide(2, 0)).toThrow();
  });
  test('divides 5 by 3 to be 1.6666666666666667', () => {
    expect(calculator.divide(5, 3)).toBeCloseTo(1.6666666666666667);
  });
  test('divides 3.21 by 0.89 to be 3.6067415730337076', () => {
    expect(calculator.divide(3.21, 0.89)).toBeCloseTo(3.6067415730337076);
  });
});