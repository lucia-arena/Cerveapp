import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/Home"
import Main from "../main/Main"
import Settings from "../settings/Settings"
import Login from "../login/Login"
import Error from "../error/Error"
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/index" component={Main} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/login" component={Login} />
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;