import { describe, expect, it } from 'bun:test';
import {
  envOrThrow,
  envOrThrowArray,
  envOrThrowBoolean,
  envOrThrowInt,
} from '../src';

describe('Correctly returned', () => {
  it('string', () => {
    expect(envOrThrow('STRING_KEY')).toBe('foo');
  });

  it('int', () => {
    expect(envOrThrowInt('INT_KEY')).toBe(4000);
  });

  it('boolean true', () => {
    expect(envOrThrowBoolean('BOOLEAN_TRUE')).toBe(true);
  });

  it('boolean 1', () => {
    expect(envOrThrowBoolean('BOOLEAN_1')).toBe(true);
  });

  it('boolean false', () => {
    expect(envOrThrowBoolean('BOOLEAN_FALSE')).toBe(false);
  });

  it('boolean 0', () => {
    expect(envOrThrowBoolean('BOOLEAN_0')).toBe(false);
  });

  it('string array', () => {
    expect(envOrThrowArray('STRING_ARR')).toEqual(['foo', 'bar', 'baz']);
  });
});

describe('Throw on missing', () => {
  it('string', () => {
    expect(() => {
      envOrThrow('MISSING');
    }).toThrowError();
  });

  it('int', () => {
    expect(() => {
      envOrThrowInt('MISSING');
    }).toThrowError();
  });

  it('boolean', () => {
    expect(() => {
      envOrThrowBoolean('MISSING');
    }).toThrowError();
  });

  it('string array', () => {
    expect(() => {
      envOrThrowArray('MISSING');
    }).toThrowError();
  });
});
