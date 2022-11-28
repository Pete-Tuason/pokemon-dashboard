import { WidgetType } from '../../types/widget.type';
import { Col, Row, Container } from 'reactstrap';
import classNames from './lists.module.scss';

export interface IListsComponentProps {
    widgets: WidgetType[]
};

const ListsComponent: React.FunctionComponent<IListsComponentProps> = props => {
    return (
        <div className={classNames.lists}>
            <div className={classNames.listsContainer}>
                <Container className='grid-container height-100' fluid>
                    <Row fluid className='rows text-center'>
                        {props.widgets.map((widget: WidgetType, index: number) => (
                            <Col fluid key={index} md='12' className='columns'>
                                <p>
                                    {widget.title}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ListsComponent;