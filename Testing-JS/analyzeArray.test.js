import { describe, expect, test } from '@jest/globals';

import analyzeArray from './analyzeArray.js';

describe('analyzeArray', () => {
  test('empty array returns 0 for all properties', () => {
    expect(analyzeArray([])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });

  test('integer array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('decimal array', () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3,
    });
  });

  test('mixed integer and decimal array', () => {
    expect(analyzeArray([1, 2.5, 3, 4.5])).toEqual({
      average: 2.75,
      min: 1,
      max: 4.5,
      length: 4,
    });
  });

  test('array with negative numbers', () => {
    expect(analyzeArray([-5, -1, -10, -3])).toEqual({
      average: -4.75,
      min: -10,
      max: -1,
      length: 4,
    });
  });

  test('array with both positive and negative numbers', () => {
    expect(analyzeArray([-3, 0, 5, -1, 10])).toEqual({
      average: 2.2,
      min: -3,
      max: 10,
      length: 5,
    });
  });

  test('array containing repeated numbers', () => {
    expect(analyzeArray([4, 4, 4, 4])).toEqual({
      average: 4,
      min: 4,
      max: 4,
      length: 4,
    });
  });

  test('single-element array', () => {
    expect(analyzeArray([7])).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 1,
    });
  });
});