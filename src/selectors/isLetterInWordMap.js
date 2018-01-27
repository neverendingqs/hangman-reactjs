import { createSelector } from 'reselect';

import guessedLettersSelector from './guessedLetters';
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [guessedLettersSelector, currentWordSelector],
  (guessedLetters, currentWord) => guessedLetters.reduce(
    (map, letter) => {
      map[letter] = currentWord.includes(letter);
      return map;
    },
    {}
  )
);
