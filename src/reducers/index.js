import { combineReducers } from 'redux';

import currentWord from './currentWord';
import isForfeited from './isForfeited';
import lettersStatus from './lettersStatus';
import maxGuesses from './maxGuesses';

const rootReducer = combineReducers({
  currentWord,
  isForfeited,
  lettersStatus,
  maxGuesses
});
export default rootReducer;
