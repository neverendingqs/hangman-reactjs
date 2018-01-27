import { combineReducers } from 'redux';

import currentWord from './currentWord';
import lettersStatus from './lettersStatus';
import maxGuesses from './maxGuesses';

const rootReducer = combineReducers({
  currentWord,
  lettersStatus,
  maxGuesses
});
export default rootReducer;
