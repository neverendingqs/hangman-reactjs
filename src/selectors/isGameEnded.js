import { createSelector } from 'reselect';

import hasUserWonSelector from './hasUserWon';
import hasUserLostSelector from './hasUserLost';
const hasUserForfeitedSelector = state => state.hasUserForfeited;

export default createSelector(
  [hasUserWonSelector, hasUserLostSelector, hasUserForfeitedSelector],
  (hasUserWon, hasUserLost, hasUserForfeited) => hasUserWon || hasUserLost || hasUserForfeited
);
