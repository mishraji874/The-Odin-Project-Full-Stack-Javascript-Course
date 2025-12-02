import { describe, expect, test } from '@jest/globals';

import caesarCipher from './caesarCipher.js';

describe('caesarCipher', () => {
  test('returns empty string unchanged', () => {
    expect(caesarCipher('', 10)).toBe('');
  });

  test('string with only punctuation remains unchanged', () => {
    expect(caesarCipher('.,!?;:-()', 7)).toBe('.,!?;:-()');
  });

  test('mixed letters and punctuation', () => {
    expect(caesarCipher('A1B2C3!', 2)).toBe('C1D2E3!');
  });

  test('key of zero returns the original string', () => {
    expect(caesarCipher('Hello', 0)).toBe('Hello');
  });

  test('full alphabet rotation with positive key', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1))
      .toBe('bcdefghijklmnopqrstuvwxyza');
  });

  test('full alphabet rotation with negative key', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -1))
      .toBe('zabcdefghijklmnopqrstuvwxy');
  });

  test('very large positive key still normalizes correctly', () => {
    expect(caesarCipher('abc', 2605)) // 2605 % 26 = 5
      .toBe('fgh');
  });

  test('very large negative key still normalizes correctly', () => {
    expect(caesarCipher('xyz', -2605)) // -2605 % 26 = -5 → normalized 21
      .toBe('stu');
  });

  test('non-latin characters should be unchanged', () => {
    expect(caesarCipher('안녕하세요', 5)).toBe('안녕하세요');
  });

  test('handles long text', () => {
    const input = 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.';
    const output = 'Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.';
    expect(caesarCipher(input, 7)).toBe(output);
  });
});