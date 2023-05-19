import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pre-screening Project', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pre-screening/i);
  expect(linkElement).toBeInTheDocument();
});
