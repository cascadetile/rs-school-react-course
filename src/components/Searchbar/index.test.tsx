import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Searchbar from './index';

describe('Searchbar', () => {
  it('updates the search value on input and sets it in local storage', () => {
    const { getByPlaceholderText } = render(<Searchbar />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    const searchValue = 'example search';

    fireEvent.input(input, { target: { value: searchValue } });

    expect(input.value).toBe(searchValue);
    expect(localStorage.getItem('searchValue')).toBe(searchValue);
  });
});
