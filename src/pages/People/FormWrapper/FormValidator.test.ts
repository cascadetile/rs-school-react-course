import { describe, it, expect, beforeEach } from 'vitest';
import { FormValidator } from './FormValidator';

describe('FormValidator', () => {
  let validator: FormValidator;

  beforeEach(() => {
    validator = new FormValidator();
  });

  it('returns errors when name is empty', () => {
    const data = {
      name: '',
      date: '2022-01-01',
      country: 'USA',
      agree: true,
      male: true,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorName).toBe('Name should not be empty');
  });

  it('returns errors when name starts with lowercase', () => {
    const data = {
      name: 'john',
      date: '2022-01-01',
      country: 'USA',
      agree: true,
      male: true,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorName).toBe('Name should start from uppercase');
  });

  it('returns errors when date is empty', () => {
    const data = {
      name: 'John',
      date: '',
      country: 'USA',
      agree: true,
      male: true,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorDate).toBe('Date should not be empty');
  });

  it('returns errors when country is not selected', () => {
    const data = {
      name: 'John',
      date: '2022-01-01',
      country: 'default',
      agree: true,
      male: true,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorCountry).toBe('You did not select your country');
  });

  it('returns errors when agreement is not accepted', () => {
    const data = {
      name: 'John',
      date: '2022-01-01',
      country: 'USA',
      agree: false,
      male: true,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorAgree).toBe('You must accept the agreement');
  });

  it('returns errors when gender is not selected', () => {
    const data = {
      name: 'John',
      date: '2022-01-01',
      country: 'USA',
      agree: true,
      male: false,
      female: false,
      file: null,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorGender).toBe('You must choose your gender');
  });

  it('returns errors when file is not selected', () => {
    const data = {
      name: 'John',
      date: '2022-01-01',
      country: 'USA',
      agree: true,
      male: true,
      female: false,
      file: [] as unknown as FileList,
    };

    const result = validator.validate(data);

    expect(result.isValid).toBe(false);
    expect(result.errors.errorFile).toBe('You must select a file');
  });
});