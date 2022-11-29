import { WidgetType } from '../../types/widget.type';
import classNames from './card.module.scss';
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';

export interface ICardComponentComponentProps {
    widget: WidgetType
};

const CardComponent: React.FunctionComponent<ICardComponentComponentProps> = props => {
    return (
        <Card className={classNames.card}>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
                <CardTitle tag="h4" className={classNames.cardTitle}>
                    {props.widget.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h5">
                    Card subtitle
                </CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default CardComponent;