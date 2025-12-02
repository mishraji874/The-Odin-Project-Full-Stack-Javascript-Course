import { describe, expect, test } from '@jest/globals';

import reverseString from '../reverseString.js';

describe('reverseString', () => {
  test('returns empty string when input is empty string', () => {
    expect(reverseString('')).toBe('');
  });
  test('returns reversed string when input is odd-length string', () => {
    expect(reverseString('oddString')).toBe('gnirtSddo');
  });
  test('returns reversed string when input is even-lenght string', () => {
    expect(reverseString('evenString')).toBe('gnirtSneve');
  });
});