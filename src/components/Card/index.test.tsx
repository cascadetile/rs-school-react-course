import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './index';

describe('Card', () => {
  const props = {
    imgUrl: 'https://example.com/image.jpg',
    title: 'Example Title',
    description: 'Example Description',
  };

  it('should render with the correct props', () => {
    const { getByAltText, getByText } = render(<Card {...props} />);
    expect(getByAltText('')).toHaveAttribute('src', props.imgUrl);
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
  });
});