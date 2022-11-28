import { WidgetType } from '../../types/widget.type';
import classNames from './cards.module.scss';
import { Col, Row, Container } from 'reactstrap';

export interface ICardsComponentComponentProps {
    widgets: WidgetType[]
};

const CardsComponent: React.FunctionComponent<ICardsComponentComponentProps> = props => {
    return (
        <div className={classNames.cards}>
            <div className={classNames.cardsContainer}>
                <Container className='grid-container' fluid>
                    <Row fluid className='rows text-center space-between'>
                        {props.widgets.map((widget: WidgetType, index: number) => (
                            <Col fluid key={index} md='6' className='columns'>
                                {widget.title}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CardsComponent;