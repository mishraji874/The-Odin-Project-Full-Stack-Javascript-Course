import { describe, expect, test } from '@jest/globals';

import capitalize from './capitalize.js';

describe('capitalize', () => {
  test('returns an empty string when input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns the original string when it begins with punctuation', () => {
    expect(capitalize('!Starts with punctuation')).toBe('!Starts with punctuation');
  });

  test('returns the original string when it is already capitalized', () => {
    expect(capitalize('Already capitalized')).toBe('Already capitalized');
  });

  test('returns the original string when it begins with whitespace', () => {
    expect(capitalize('   Empty string leads')).toBe('   Empty string leads');
  });

  test('capitalizes the first character when it is a lowercase letter (example 1)', () => {
    expect(capitalize('hello, world!')).toBe('Hello, world!');
  });

  test('capitalizes the first character when it is a lowercase letter (example 2)', () => {
    expect(capitalize('capitalize this string')).toBe('Capitalize this string');
  });
});