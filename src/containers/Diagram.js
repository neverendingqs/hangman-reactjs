import { connect } from 'react-redux';

import Diagram from '../components/Diagram';

const mapStateToProps = state => ({
  currentWord: state.currentWord,
  lettersStatus: state.lettersStatus
});

const connector = connect(mapStateToProps);
export default connector(Diagram);
