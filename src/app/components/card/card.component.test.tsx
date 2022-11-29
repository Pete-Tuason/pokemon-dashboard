import { render, screen } from '@testing-library/react';
import { WidgetType } from '../../types/widget.type';
import CardComponent from './card.component';

const widget: WidgetType = {
    api: 'https://pokeapi.co/api/v2/gender/1/',
    title: 'title',
    type: 'type',
    subtitle: 'subtitle'
};

test('renders card component and expects the div named card', () => {
    render(<CardComponent widget={widget} />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
});

test('renders card component and expects widget title', () => {
    render(<CardComponent widget={widget} />);
    const titleText = screen.getByText(widget.title);
    expect(titleText).toBeInTheDocument();
});
