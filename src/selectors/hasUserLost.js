import { createSelector } from 'reselect';

import numGuessesRemainingSelector from './numGuessesRemaining';

export default createSelector(
  [numGuessesRemainingSelector],
  (numGuessesRemaining) => numGuessesRemaining == 0
);
