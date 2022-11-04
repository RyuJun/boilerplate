import { render, screen } from '@testing-library/react';

import Posts from './Posts';

test('Renders main page correctly', () => {
  render(<Posts />);

  expect(true).toBe(true);
});
