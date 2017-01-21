import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Page from 'components/Page';
import Arena from 'components/Arena';
import BigBoard from 'components/BigBoard';

let Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Page}>
            <Route path="Arena" component={Arena} />
            <Route path="BigBoard" component={BigBoard} />
        </Route>
    </Router>
)

export default Routes;