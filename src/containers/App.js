import React, { Component } from "react";
import Hoc from "./Hoc";
import Main from "../components/Main/Main";
import Dashboard from "../components/Dashboard/Dashboard";
import { MemoryRouter, Route } from "react-router";
import { setOptionLocal, getOptionLocal } from "../js/util";
import "@babel/polyfill";

export default class App extends Component {
    render() {
        let credentials, isLoggedIn;

        (async function () {
            /* determine if the user is currently logged in */
            credentials = await getOptionLocal("user_credentials");
            isLoggedIn = !!credentials;
        })();

        console.log(isLoggedIn, credentials);

        return (
            <MemoryRouter>
                <Hoc>
                    <Route
                        component={() => <Main isLoggedIn={isLoggedIn} userCredentials={credentials} />}
                        exact path="/"/>
                    <Route path="/dashboard" component={Dashboard} />
                </Hoc>
            </MemoryRouter>)
    }
}