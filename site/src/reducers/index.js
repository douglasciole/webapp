import signupReducer from './signup';
import loginReducer from './login';
import errorReducer from './error';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    form: signupReducer,
    login: loginReducer,
    error: errorReducer
})

export default allReducers;