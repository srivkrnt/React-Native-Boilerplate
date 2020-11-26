import React from 'react';
import { Drawer, Scene, Stack } from 'react-native-router-flux';
import Dashboard from './demo/screens/Dashboard/Dashboard';
import Insights from './demo/screens/Insights/Insights';
import Settings from './demo/screens/Settings/Settings';
import Feather from "react-native-vector-icons/Feather";
import COLORS from './shared/constants/color.constants';

const dashboardIcon= ({ focused }) => (
    <Feather color={focused ? COLORS.PRIMARY_COLOR : COLORS.SECONDARY_GREY} name="credit-card" size={20}/>
);

const insightsIcon= ({ focused }) => (
    <Feather color={focused ? COLORS.PRIMARY_COLOR : COLORS.SECONDARY_GREY} name="trello" size={20}/>
);

const settingsIcon= ({ focused }) => (
    <Feather color={focused ? COLORS.PRIMARY_COLOR : COLORS.SECONDARY_GREY} name="settings" size={20}/>
);

module.exports = (
    <Scene>
        <Stack key="root" hideNavBar>
            <Drawer>
                <Scene tabs hideNavBar = {true}>
                    <Scene
                        key="dashboard"
                        title="Dashboard"
                        icon={dashboardIcon}
                        component={Dashboard}
                        hideNavBar={true}
                    />
                    <Scene
                        key="insights"
                        title="Insights"
                        component={Insights}
                        icon={insightsIcon}
                        hideNavBar={true}
                    />
                    <Scene
                        key="settings"
                        title="Settings"
                        icon={settingsIcon}
                        component={Settings}
                        hideNavBar={true}
                    />
                </Scene>
            </Drawer>
        </Stack>
    </Scene>
)