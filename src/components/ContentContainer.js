import { connect } from 'react-redux';
import Content from './Content';
import { checkUserThunkCreator } from '../reducers/mainReducer';

const mapStateToProps = state => ({
    isSocialsSent: state.main.isSocialsSent,
    isEmailSent: state.main.isEmailSent,
});

const mapDispatchToProps = dispatch => ({
    checkUser: () => {
        dispatch(checkUserThunkCreator());
    },
});

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;