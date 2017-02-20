import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AuthService from './utils/AuthService';
import Wrapper from './components/wrapper/Wrapper';
import Home from './views/Home/Home';

const auth = new AuthService('YZFxK30fCoitjYuWBoLvUnVfFpL25g8K', 'stannio.auth0.com');

export const makeRoutes = () => {
    return (
        <Route path="/" auth={auth} component={Wrapper}>
            <IndexRoute component={Home}/>
        </Route>
    )
};
export default makeRoutes