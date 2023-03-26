import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardGroup from './index';
import Card from '../Card';

describe('CardGroup component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <CardGroup>
        <Card>
          <h2>Card Title 1</h2>
          <p>Card Description 1</p>
        </Card>
        <Card>
          <h2>Card Title 2</h2>
          <p>Card Description 2</p>
        </Card>
      </CardGroup>
    );

    expect(getByText('Card Title 1')).toBeInTheDocument();
    expect(getByText('Card Description 1')).toBeInTheDocument();
    expect(getByText('Card Title 2')).toBeInTheDocument();
    expect(getByText('Card Description 2')).toBeInTheDocument();
  });

  it('renders with correct class name', () => {
    const { container } = render(<CardGroup><Card><h2>Card Title 1</h2></Card></CardGroup>);
    expect(container.firstChild).toHaveClass('card-group');
  });
});