import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/home'
import User from './pages/user'
import Login from './pages/login'

function routes() {
    return <Switch>
        <Route path="/user">
            <User />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
}

export default routes