import { WidgetType } from '../../types/widget.type';
import { CardSubtitle, CardTitle, List } from 'reactstrap';
import classNames from './list.module.scss';

export interface IListComponentProps {
    widget: WidgetType
};

const ListComponent: React.FunctionComponent<IListComponentProps> = props => {
    return (
        <div className={classNames.listContainer}>
            <CardTitle tag="h4" className={classNames.listTitle}>
                {props.widget.title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {props.widget.subtitle}
            </CardSubtitle>
            <List className={classNames.list}>
                <li>
                    Lorem ipsum
                </li>
                <li>
                    Phasellus iaculis
                </li>
                <li>
                    Nulla volutpat
                </li>
            </List>
        </div>
    );
};

export default ListComponent;