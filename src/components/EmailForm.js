import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin-top: 20px;
`;

const Email = styled(Field)`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    outline: none;
    --webkit-appearance: none;
    box-sizing: border-box;
    padding: 10px 20px;
    font-size: 20px;
`;

const SubmitButton = styled.button`
    display: block;
    width: 60%;
    margin: auto;
    height: 70px;
    background: ${props => props.active === 'false' ? 'none' : 'white'};
    color: ${props => props.active === 'false' ? 'white' : '#7F4156'};
    opacity: ${props => props.active === 'false' ? '0.3' : '1'};
    border: 2px solid white;
    border-radius: 50px;
    font-family: 'Shnobel';
    font-size: 40px;
    margin-top: 30px;
    padding: 10px;
    transition: 0.3s;
    outline: none;
    cursor: pointer;
    :hover {
        background: ${props => props.active === 'false' ? 'none' : '#7F4156'};
        border: ${props => props.active === 'false' ? '2px solid white' : '2px solid #7F4156'};
        color: white;
    }
`;

let EmailForm = props => {

    const { handleSubmit, checkEmail, isEmailValid } = props;

    return (
        <StyledForm onSubmit={ handleSubmit }>
            <Email name="email"
                component="input"
                type="email"
                onChange={ (e, value) => checkEmail(value) }>
            </Email>
            <SubmitButton name="submit"
                component="button"
                type="submit"
                disabled={ !isEmailValid }
                active={ isEmailValid.toString() }>

                Отправить
            </SubmitButton>
        </StyledForm>
    );
};

EmailForm = reduxForm({
    form: 'emailForm',
})(EmailForm);

export default EmailForm;