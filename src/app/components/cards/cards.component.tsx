import { WidgetType } from '../../types/widget.type';
import classNames from './cards.module.scss';
import CardComponent from '../card/card.component';
import { Col } from 'reactstrap';

export interface ICardsComponentComponentProps {
    widgets: WidgetType[],
    heading: string,
    columns: number
};

const CardsComponent: React.FunctionComponent<ICardsComponentComponentProps> = props => {
    return (
        <div data-testid="cards" className={classNames.cards}>
            <div className={classNames.cardsContainer}>
                <h1>{props.heading}</h1>
                <div className={classNames.cardsContent}>
                    {props.widgets.map((widget: WidgetType, index: number) => (
                        <Col key={index} md={12 / props.columns}>
                            <CardComponent key={index} widget={widget}></CardComponent>
                        </Col>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsComponent;