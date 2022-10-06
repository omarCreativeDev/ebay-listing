import { render, screen } from '@testing-library/react';
import App from './App';

test('renders creative developments.net in footer', () => {
  render(<App />);
  const linkElement = screen.getByText('Creative Developments.net');
  expect(linkElement).toBeInTheDocument();
});
