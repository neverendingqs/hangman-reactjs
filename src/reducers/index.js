import { combineReducers } from 'redux';

import currentWord from './currentWord';
import lettersStatus from './lettersStatus';

const rootReducer = combineReducers({ currentWord, lettersStatus });
export default rootReducer;
