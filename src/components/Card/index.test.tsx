import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './index';

describe('Card component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Card>
        <h2>Card Title</h2>
        <p>Card Description</p>
      </Card>
    );

    expect(getByText('Card Title')).toBeInTheDocument();
    expect(getByText('Card Description')).toBeInTheDocument();
  });

  it('renders with correct class name', () => {
    const { container } = render(<Card><h2>Card Title</h2></Card>);
    expect(container.firstChild).toHaveClass('card');
  });
});