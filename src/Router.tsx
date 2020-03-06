import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "./components/App";

const Router: React.FunctionComponent<IRouterProps> = props => {
    return (
        <BrowserRouter>
            <main className={'container'}>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </main>
        </BrowserRouter>
    )
};

export default Router;

interface IRouterProps {

}
