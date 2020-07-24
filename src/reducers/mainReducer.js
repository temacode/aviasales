import axios from 'axios';

const CHANGE_SOCIALS = 'CHANGE_SOCIALS';
const CHANGE_EMAIL_STATUS = 'CHANGE_EMAIL_STATUS';
const HANDLE_EMAIL_SUBMIT = 'HANDLE_EMAIL_SUBMIT';

const initialState = {
    isSocialsSent: false,
    isEmailValid: false,
    isEmailSent: false,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOCIALS: {
            let socialsState = { ...state };
            socialsState.isSocialsSent = !state.isSocialsSent;

            return socialsState;
        }
        case CHANGE_EMAIL_STATUS: {
            let emailStatus = { ...state };
            emailStatus.isEmailValid = action.data;

            return emailStatus;
        }
        case HANDLE_EMAIL_SUBMIT: {
            let handleSubmitState = { ...state };
            handleSubmitState.isEmailSent = true;

            return handleSubmitState;
        }
        default: {
            return state;
        }
    }
};

export const changeSocialsStatusActionCreator = () => ({
    type: CHANGE_SOCIALS,
});

export const changeSocialsStatusThunkCreator = () => dispatch => {
    let userInfo = JSON.parse(localStorage.getItem('shared_user'));
    userInfo.shared = true;
    localStorage.setItem('shared_user', JSON.stringify(userInfo));

    updateUser();

    dispatch(changeSocialsStatusActionCreator());
};

const changeEmailValidActionCreator = status => ({
    type: CHANGE_EMAIL_STATUS,
    data: status,
});

export const checkEmailThunkCreator = value => dispatch => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/im;

    if (emailRegex.test(value)) {
        dispatch(changeEmailValidActionCreator(true));
        return true;
    } else {
        dispatch(changeEmailValidActionCreator(false));
        return false;
    }
};

const changeEmailStatusActionCreator = () => ({
    type: HANDLE_EMAIL_SUBMIT,
});

export const handleEmailSubmitThunkCreator = value => dispatch => {
    let userInfo = JSON.parse(localStorage.getItem('shared_user'));
    userInfo.email = value.email;
    localStorage.setItem('shared_user', JSON.stringify(userInfo));

    updateUser();

    dispatch(changeEmailStatusActionCreator());
};

export const checkUserThunkCreator = () => dispatch => {
    const userInfo = JSON.parse(localStorage.getItem('shared_user'));

    if (!userInfo) {
        console.log('Пользователя не существует, создаем');
        //Отправляем запрос на созданиеы
        axios.get('/api/shared').then(res => {
            let userData = {
                id: res.data.id,
                shared: false,
                email: '',
            };
            localStorage.setItem('shared_user', JSON.stringify(userData));
        });

        return;
    }

    if (userInfo.shared) {
        dispatch(changeSocialsStatusActionCreator());
    }

    if (userInfo.email) {
        dispatch(changeEmailStatusActionCreator());
    }
};

const updateUser = () => {
    const userInfo = JSON.parse(localStorage.getItem('shared_user'));

    axios.post('api/shared', userInfo).then(res => {
        console.log(res.data);
    });
};

export default mainReducer;