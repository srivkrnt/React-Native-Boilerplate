import { combineReducers } from 'redux';
import appSettingsReducer from '../reducers/appSettings.reducer';

const appReducer = combineReducers({
    settings : appSettingsReducer,
});

const rootReducer = (state, action) => {
    if(action.type == 'USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;