import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const greeting = getByText(/hello world/i);
  expect(greeting).toBeInTheDocument();
});
