import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { useMediaQuery } from 'react-responsive';

const StyledContent = styled.div`
    min-width: 200px;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px;
`;

const Man = styled.img`
    position: absolute;
    height: 98%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 2;
`;

const FinalText = styled.h1`
    display: block;
    width: 100%;
    font-family: 'Shnobel';
    text-align: center;
    color: white;
    font-size: ${props => props.big ? '100px' : '50px'};
    font-weight: 300;
    span {
        position: relative;
        color: #7F4156;
        font-family: 'Shnobel';
        font-size: 50px;
    }
    span:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 4px;
        top: 60%;
        left: 0;
        background: #7F4156;
    }
`;

const Ground =styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100px;
    bottom: 0;
    background: #D78DA4;
`;

const Final = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

    return (
        <StyledContent>
            <Logo></Logo>
            <FinalText><span>ВЫБОРЫ</span></FinalText>
            <FinalText>ПУТЕШЕСТВИЕ</FinalText>
            <FinalText big>БЛИЗКО</FinalText>
            {isMobile ? '' : <Man src="/man.png" alt="Финальное изображение "></Man>}
            <Ground></Ground>
        </StyledContent>
    );
};

export default Final;