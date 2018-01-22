import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { letterInput } from '../actions';
import Input from '../components/Input';

const mapStateToProps = state => ({ lettersStatus: state.lettersStatus });
const mapDispatchToProps = dispatch => bindActionCreators({ onClick: letterInput }, dispatch);

const connector = connect(mapStateToProps,mapDispatchToProps);
export default connector(Input);
