import classNames from './home.module.scss';
import { Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnType } from '../../types/column.type';
import { configuration } from '../../utils/config';
import ListsComponent from '../../components/lists/lists.component';
import CardsComponent from '../../components/cards/cards.component';
export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    const config: ColumnType[] = configuration.columns;

    return (
        <div className={classNames.home}>
            <Container className='grid-container height-100' fluid>
                <Row className='text-center rows'>
                    {config.map((column: ColumnType, index: number) => (
                        <Col key={index} md={column.size * 3} className='columns'>
                            {column.widgets[0].type === 'list' ?
                                <ListsComponent key={index} heading={column.heading} widgets={column.widgets}></ListsComponent> :
                                <CardsComponent key={index} heading={column.heading} widgets={column.widgets}></CardsComponent>
                            }
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;