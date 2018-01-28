import { createSelector } from 'reselect';

import maskedWordSelector from './maskedWord';
const hasUserForfeitedSelector = state => state.hasUserForfeited;

export default createSelector(
  [maskedWordSelector, hasUserForfeitedSelector],
  (maskedWord, hasUserForfeited) =>
    !maskedWord.includes('_') && !hasUserForfeited
);
