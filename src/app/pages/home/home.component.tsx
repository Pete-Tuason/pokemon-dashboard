import classNames from './home.module.scss';
import { Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnType } from '../../types/column.type';
import ListsComponent from '../../components/lists/lists.component';
import CardsComponent from '../../components/cards/cards.component';
import { clients } from '../../utils/clients';
export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    const clientName = 'pokemon';
    const client = clients.find(o => o.name === clientName);
    const config: ColumnType[] = client?.configuration?.columns ?? [];

    return (
        <div data-testid="home" className={classNames.home}>
            <Container className='grid-container height-100' fluid>
                <Row className='text-center rows'>
                    {config.map((column: ColumnType, index: number) => (
                        <Col key={index} md={column.size * 3} className='columns'>
                            {column.widgets[0].type === 'list' ?
                                <ListsComponent columns={column.size} key={index} heading={column.heading} widgets={column.widgets}></ListsComponent> :
                                <CardsComponent columns={column.size} key={index} heading={column.heading} widgets={column.widgets}></CardsComponent>
                            }
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;