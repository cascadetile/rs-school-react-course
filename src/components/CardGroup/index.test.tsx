import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CardGroup from './index';
import Card from '../Card';

describe('CardGroup', () => {
  it('should render all children components', () => {
    const cards = [
      {
        imgUrl: 'https://example.com/image1.jpg',
        title: 'Card 1',
        description: 'Description for Card 1',
      },
      {
        imgUrl: 'https://example.com/image2.jpg',
        title: 'Card 2',
        description: 'Description for Card 2',
      },
      {
        imgUrl: 'https://example.com/image3.jpg',
        title: 'Card 3',
        description: 'Description for Card 3',
      },
    ];

    const { getByText, getAllByAltText } = render(
      <CardGroup>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </CardGroup>
    );

    expect(getByText('Card 1')).toBeInTheDocument();
    expect(getByText('Card 2')).toBeInTheDocument();
    expect(getByText('Card 3')).toBeInTheDocument();
    expect(getAllByAltText('')).toHaveLength(3);
    expect(getAllByAltText('')[0]).toHaveAttribute('src', 'https://example.com/image1.jpg');
    expect(getAllByAltText('')[1]).toHaveAttribute('src', 'https://example.com/image2.jpg');
    expect(getAllByAltText('')[2]).toHaveAttribute('src', 'https://example.com/image3.jpg');
  });
});
