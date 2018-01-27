import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import isGameEndedSelector from '../selectors/isGameEnded';
import { letterInput } from '../actions';
import Keyboard from '../components/Keyboard';

const mapStateToProps = state => ({
  lettersStatus: state.lettersStatus,
  isGameEnded: isGameEndedSelector(state)
});
const mapDispatchToProps = dispatch => bindActionCreators({ onClick: letterInput }, dispatch);

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(Keyboard);
