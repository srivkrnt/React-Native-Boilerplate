import React from 'react';
import { Router, Scene, Stack } from "react-native-router-flux";
import Login from './shared/screens/Login';
import Verify from './shared/screens/Verify';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key = "root" hideNavBar = {true}>
                {require('./demoRouter')}
                <Scene key="login" hideNavBar component={Login} initial={true}/>
                <Scene key="verify" hideNavBar component={Verify} direction="horizontal"/>
            </Stack>
        </Router>
    )
}

export default RouterComponent;
