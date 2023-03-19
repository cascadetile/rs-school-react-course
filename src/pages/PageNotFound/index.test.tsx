import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './index';

describe('PageNotFound', () => {
  it('should render the 404 page with text and a link to the home page', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /404/i });
    const notFoundText = screen.getByText(/This page does not exist/i);
    const link = screen.getByRole('link', { name: /go home/i });

    expect(heading).toBeInTheDocument();
    expect(notFoundText).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
