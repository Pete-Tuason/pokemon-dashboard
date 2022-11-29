import { render, screen } from '@testing-library/react';
import { WidgetType } from '../../types/widget.type';
import ListComponent from './list.component';

const widget: WidgetType = {
    api: 'https://pokeapi.co/api/v2/gender/1/',
    title: 'title',
    type: 'type',
    subtitle: 'subtitle'
};

test('renders list component and expects the div named list', () => {
    render(<ListComponent widget={widget} />);
    const listElement = screen.getByTestId('list');
    expect(listElement).toBeInTheDocument();
});

test('renders list component and expects widget title', () => {
    render(<ListComponent widget={widget} />);
    const titleText = screen.getByText(widget.title);
    expect(titleText).toBeInTheDocument();
});
