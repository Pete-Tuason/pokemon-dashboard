import { WidgetType } from '../../types/widget.type';
import classNames from './lists.module.scss';
import ListComponent from '../list/list.component';

export interface IListsComponentProps {
    widgets: WidgetType[],
    heading: string
};

const ListsComponent: React.FunctionComponent<IListsComponentProps> = props => {
    return (
        <div className={classNames.lists}>
            <div className={classNames.listsContainer}>
                <h1>{props.heading}</h1>
                <div className={classNames.listsContent}>
                    {props.widgets.map((widget: WidgetType, index: number) => (
                        <ListComponent widget={widget}></ListComponent>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListsComponent;