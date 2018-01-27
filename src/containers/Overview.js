import { connect } from 'react-redux';

import Overview from '../components/Overview';

const mapStateToProps = state => ({
  currentWord: state.currentWord,
  lettersStatus: state.lettersStatus,
  maxGuesses: state.maxGuesses
});

const connector = connect(mapStateToProps);
export default connector(Overview);
