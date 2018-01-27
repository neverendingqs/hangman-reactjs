import { connect } from 'react-redux';

import Overview from '../components/Overview';
import numWrongGuessesSelector from '../selectors/numWrongGuesses';

const mapStateToProps = state => ({
  numGuessesLeft: numWrongGuessesSelector(state)
});

const connector = connect(mapStateToProps);
export default connector(Overview);
