import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from "./components/App";
import 'weathericons/css/weather-icons.min.css';

const Router: React.FunctionComponent<IRouterProps> = props => {
    return (
        <HashRouter>
            <main className={'container'}>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </main>
        </HashRouter>
    )
};

export default Router;

interface IRouterProps {}
