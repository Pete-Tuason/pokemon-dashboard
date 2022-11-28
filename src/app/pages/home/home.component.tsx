import classNames from './home.module.scss';
import logo from './../../../assets/images/logo.png';

export interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = props => {
    return (
        <div>
            <p className={classNames.title}>Home</p>
            <img className={classNames.logo} src={logo} alt={"logo"} />
        </div>
    );
};

export default HomePage;