import { combineReducers } from 'redux';

import currentWord from './currentWord';
import hasUserForfeited from './hasUserForfeited';
import lettersStatus from './lettersStatus';
import maxGuesses from './maxGuesses';

const rootReducer = combineReducers({
  currentWord,
  hasUserForfeited,
  lettersStatus,
  maxGuesses
});
export default rootReducer;
