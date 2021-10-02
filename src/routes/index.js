import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignInSuccess from '../pages/SignInSuccess';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/SignInSuccess" exact component={SignInSuccess} />
        </Switch>
    );
}

export default Routes;
