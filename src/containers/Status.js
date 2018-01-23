import { connect } from 'react-redux';

import Status from '../components/Status';

const mapStateToProps = state => ({
  currentWord: state.currentWord,
  lettersStatus: state.lettersStatus
});

const connector = connect(mapStateToProps);
export default connector(Status);
