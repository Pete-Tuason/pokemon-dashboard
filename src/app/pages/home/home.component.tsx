import classNames from './home.module.scss';
import { Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    return (
        <div className={classNames.home}>
            <Container fluid>
                <Row className='rows'>
                    <Col md="3" className='columns'></Col>
                    <Col md="6" className='columns'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;