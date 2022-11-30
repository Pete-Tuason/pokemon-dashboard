import { render, screen } from '@testing-library/react';
import { WidgetType } from '../../types/widget.type';
import ListsComponent from './lists.component';

const widgets: WidgetType[] = [{
    api: 'api',
    title: 'title',
    type: 'type',
    subtitle: 'subtitle'
}];
const heading = 'heading';

test('renders lists component and expects the div named lists', () => {
    render(<ListsComponent columns={1} key={1} widgets={widgets} heading={heading} />);
    const listsElement = screen.getByTestId('lists');
    expect(listsElement).toBeInTheDocument();
});

test('renders list component and expects widget heading', () => {
    render(<ListsComponent columns={1} key={2} widgets={widgets} heading={heading} />);
    const headingText = screen.getByText(heading);
    expect(headingText).toBeInTheDocument();
});
