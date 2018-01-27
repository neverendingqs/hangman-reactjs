import { createSelector } from 'reselect';

import maskedWordSelector from './maskedWord';
import numGuessesRemainingSelector from './numGuessesRemaining';

export default createSelector(
  [maskedWordSelector, numGuessesRemainingSelector],
  (maskedWord, numGuessesRemaining) => !maskedWord.includes('_') || numGuessesRemaining == 0
);
