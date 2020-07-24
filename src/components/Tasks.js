import React from 'react';
import styled from 'styled-components';
import {
    VKShareButton,
    FacebookShareButton,
    TwitterShareButton,
    OKShareButton,
    VKIcon,
    FacebookIcon,
    TwitterIcon,
    OKIcon,
} from 'react-share';
import EmailForm from './EmailForm';
import Logo from './Logo';

const StyledContent = styled.div`
    min-width: 200px;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    margin-top: 100px;
`;

const HelloText = styled.h1`
    font-family: 'Shnobel';
    text-align: center;
    color: white;
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 50px;
`;

const TaskBlock = styled.div`
    display: flex;
    margin-bottom: 40px;
    opacity: ${props => props.available ? '0.3' : '1'};
    pointer-events: ${props => props.available ? 'none' : 'auto'};
    span {
        font-family: 'Shnobel';
        font-size: 44px;
        color: white;
        margin-right: 10px;
        margin-top: -20px;
    }
    p {
        font-size: 18px;
        color: white;
    }
    img {
        align-self: flex-start;
        width: 20px;
        margin-right: 10px;
    }
`;

const SocialsBlock = styled.div`
    width: 100%;
`;

const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

const Tasks = props => {
    const shareUrl = 'https://aviasales.ru';

    return (
        <StyledContent>
            <Logo></Logo>
            <HelloText>Чтобы выиграть<br />путешествие</HelloText>
            <TaskBlock available={ props.isSocialsSent }>
                {!props.isSocialsSent ? <span>1.</span> : <img src="/icons/ok.png" alt="ok icon"></img>}
                <SocialsBlock>
                    <p>Поделись с друзьями</p>
                    <Socials>
                        <VKShareButton url={ shareUrl } onShareWindowClose={ props.changeSocialsStatus }>
                            <VKIcon round></VKIcon>
                        </VKShareButton>
                        <FacebookShareButton url={ shareUrl } onShareWindowClose={ props.changeSocialsStatus }>
                            <FacebookIcon  round></FacebookIcon>
                        </FacebookShareButton>
                        <TwitterShareButton url={ shareUrl } onShareWindowClose={ props.changeSocialsStatus }>
                            <TwitterIcon round></TwitterIcon>
                        </TwitterShareButton>
                        <OKShareButton url={ shareUrl } onShareWindowClose={ props.changeSocialsStatus }>
                            <OKIcon round></OKIcon>
                        </OKShareButton>
                    </Socials>
                </SocialsBlock>
            </TaskBlock>
            <TaskBlock available={ props.isEmailSent }>
                {!props.isEmailSent ? <span>2.</span> : <img src="/icons/ok.png" alt="ok icon"></img>}
                <SocialsBlock>
                    <p>Оставь почту:</p>
                    <EmailForm isEmailValid={ props.isEmailValid }
                        checkEmail={  props.checkEmail }
                        onSubmit={ props.handleSubmit }>
                    </EmailForm>
                </SocialsBlock>
            </TaskBlock>
        </StyledContent>
    );
};

export default Tasks;