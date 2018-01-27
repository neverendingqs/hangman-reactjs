import { connect } from 'react-redux';

import Diagram from '../components/Diagram';
import maskedWordSelector from '../selectors/maskedWord';

const mapStateToProps = state => ({
  maskedWord: maskedWordSelector(state)
});

const connector = connect(mapStateToProps);
export default connector(Diagram);
