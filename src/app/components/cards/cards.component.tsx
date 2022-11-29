import { WidgetType } from '../../types/widget.type';
import classNames from './cards.module.scss';
import CardComponent from '../card/card.component';

export interface ICardsComponentComponentProps {
    widgets: WidgetType[],
    heading: string
};

const CardsComponent: React.FunctionComponent<ICardsComponentComponentProps> = props => {
    return (
        <div className={classNames.cards}>
            <div className={classNames.cardsContainer}>
                <h1>{props.heading}</h1>
                <div className={classNames.cardsContent}>
                    {props.widgets.map((widget: WidgetType, index: number) => (
                        <CardComponent widget={widget}></CardComponent>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsComponent;