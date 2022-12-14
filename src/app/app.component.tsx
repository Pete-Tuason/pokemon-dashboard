import RouterOutlet from './app.routing.module';
import classNames from './app.module.scss';
export interface IAppComponentProps { };

const AppComponent: React.FunctionComponent<IAppComponentProps> = props => {
    return (
        <div data-testid="app" className={classNames.app}>
            <RouterOutlet></RouterOutlet>
        </div>
    );
};

export default AppComponent;