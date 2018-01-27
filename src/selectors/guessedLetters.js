import { createSelector } from 'reselect';

const lettersStatusSelector = state => state.lettersStatus;

export default createSelector(
  lettersStatusSelector,
  lettersStatus => Object
    .keys(lettersStatus)
    .filter(key => lettersStatus[key])
);
