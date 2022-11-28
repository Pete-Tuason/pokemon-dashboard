import RouterOutlet from './app.routing.module';

export interface IAppComponentProps { };

const AppComponent: React.FunctionComponent<IAppComponentProps> = props => {
    return (
        <RouterOutlet></RouterOutlet>
    );
};

export default AppComponent;