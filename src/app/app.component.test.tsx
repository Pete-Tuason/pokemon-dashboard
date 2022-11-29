import { render, screen } from '@testing-library/react';
import AppComponent from './app.component';

test('renders app component and expects the div named app', () => {
  render(<AppComponent />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
