import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forfeitGame, newGame } from '../actions';
import Overview from '../components/Overview';
import numGuessesRemainingSelector from '../selectors/numGuessesRemaining';
import hasUserWonSelector from '../selectors/hasUserWon';

const mapStateToProps = state => ({
  hasUserWon: hasUserWonSelector(state),
  isForfeited: state.isForfeited,
  numGuessesLeft: numGuessesRemainingSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  forfeitOnClick: forfeitGame,
  newGameOnClick: newGame
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Overview);
