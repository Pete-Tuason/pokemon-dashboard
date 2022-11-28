import { render, screen } from '@testing-library/react';
import AppComponent from './app.component';

test('renders learn react link', () => {
  render(<AppComponent />);
  const paragraphElement = screen.getByText(/home/i);
  expect(paragraphElement).toBeInTheDocument();
});
