import { combineReducers } from 'redux';
import LoginReducer from './login';
import userReducer from './user';

export default combineReducers({
    LoginReducer,
    userReducer
});