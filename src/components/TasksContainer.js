import { connect } from 'react-redux';
import {
    changeSocialsStatusThunkCreator,
    handleEmailSubmitThunkCreator,
    checkEmailThunkCreator,
} from '../reducers/mainReducer';
import Tasks from './Tasks';

const mapStateToProps = state => ({
    isSocialsSent: state.main.isSocialsSent,
    isEmailValid: state.main.isEmailValid,
    isEmailSent: state.main.isEmailSent,
});
const mapDispatchToProps = dispatch => ({
    changeSocialsStatus: () => {
        dispatch(changeSocialsStatusThunkCreator());
    },
    handleSubmit: value => {
        dispatch(handleEmailSubmitThunkCreator(value));
    },
    checkEmail: value => {
        dispatch(checkEmailThunkCreator(value));
    },
});

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;