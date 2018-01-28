import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { forfeitGame, newGame } from '../actions';
import Overview from '../components/Overview';
import isGameEndedSelector from '../selectors/isGameEnded';
import numGuessesRemainingSelector from '../selectors/numGuessesRemaining';

const mapStateToProps = state => ({
  numGuessesLeft: numGuessesRemainingSelector(state),
  isGameEnded: isGameEndedSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  forfeitOnClick: forfeitGame,
  newGameOnClick: newGame
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Overview);
