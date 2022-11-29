import { render, screen } from '@testing-library/react';
import { ColumnType } from '../../types/column.type';
import { configuration } from '../../utils/config';
import HomeComponent from './home.component';

test('renders home component and expects the div named home', () => {
    render(<HomeComponent />);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
});

test('renders home component and expects configuration heading', () => {
    const config: ColumnType[] = configuration.columns;
    render(<HomeComponent />);
    const headingText = screen.getByText(config[0].heading);
    expect(headingText).toBeInTheDocument();
});
