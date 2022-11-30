import { render, screen } from '@testing-library/react';
import { WidgetType } from '../../types/widget.type';
import CardsComponent from './cards.component';

const widgets: WidgetType[] = [{
    api: 'api',
    title: 'title',
    type: 'type',
    subtitle: 'subtitle'
}];
const heading = 'heading';

test('renders cards component and expects the div named cards', () => {
    render(<CardsComponent columns={1} key={1} widgets={widgets} heading={heading} />);
    const cardsElement = screen.getByTestId('cards');
    expect(cardsElement).toBeInTheDocument();
});

test('renders cards component and expects widget heading', () => {
    render(<CardsComponent columns={1} key={2} widgets={widgets} heading={heading} />);
    const headingText = screen.getByText(heading);
    expect(headingText).toBeInTheDocument();
});
