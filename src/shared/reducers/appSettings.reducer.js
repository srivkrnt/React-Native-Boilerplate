import AppSettingsConstants from '../constants/appSettings.constants'

const appSettingsReducerDefaultState = {
    isConnected : true,
}

export default (state = appSettingsReducerDefaultState, action) => {
    switch(action.type) {
        case AppSettingsConstants.SET_APP_SETTINGS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}