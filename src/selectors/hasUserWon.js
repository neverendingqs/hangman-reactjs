import { createSelector } from 'reselect';

import maskedWordSelector from './maskedWord';
const isForfeitedSelector = state => state.isForfeited;

export default createSelector(
  [maskedWordSelector, isForfeitedSelector],
  (maskedWord, isForfeited) =>
    !maskedWord.includes('_') && !isForfeited
);
