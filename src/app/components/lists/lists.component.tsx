import { WidgetType } from '../../types/widget.type';
import classNames from './lists.module.scss';
import ListComponent from '../list/list.component';
import { Col } from 'reactstrap';

export interface IListsComponentProps {
    widgets: WidgetType[],
    heading: string,
    columns: number
};

const ListsComponent: React.FunctionComponent<IListsComponentProps> = props => {
    return (
        <div data-testid="lists" className={classNames.lists}>
            <div className={classNames.listsContainer}>
                <h1>{props.heading}</h1>
                <div className={classNames.listsContent}>
                    {props.widgets.map((widget: WidgetType, index: number) => (
                        <Col key={index} md={12 / props.columns} className='columns'>
                            <ListComponent key={index} widget={widget}></ListComponent>
                        </Col>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListsComponent;