import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forfeitGame, newGame } from '../actions';
import Overview from '../components/Overview';
import numGuessesRemainingSelector from '../selectors/numGuessesRemaining';

const mapStateToProps = state => ({
  numGuessesLeft: numGuessesRemainingSelector(state),
  isForfeited: state.isForfeited
});

const mapDispatchToProps = dispatch => bindActionCreators({
  forfeitOnClick: forfeitGame,
  newGameOnClick: newGame
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Overview);
