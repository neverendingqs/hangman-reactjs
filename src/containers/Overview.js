import { connect } from 'react-redux';

import Overview from '../components/Overview';
import numGuessesRemainingSelector from '../selectors/numGuessesRemaining';

const mapStateToProps = state => ({
  numGuessesLeft: numGuessesRemainingSelector(state)
});

const connector = connect(mapStateToProps);
export default connector(Overview);
