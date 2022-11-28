import classNames from './home.module.scss';
import { Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColumnType } from '../../types/column.type';
import { configuration } from '../../services/config';
export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    const config: ColumnType[] = configuration.columns;

    return (
        <div className={classNames.home}>
            <Container fluid>
                <Row className='rows'>
                    {config.map((column: ColumnType, index: number) => (
                        <Col key={index} md={column.size * 3} className='columns'>
                            {column.heading}
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;