import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const StyledLogo = styled.img`
    position: absolute;
    top: 30px;
    left: 30px;
    height: 30px;
`;

const Logo = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const logoPath = isMobile ? '/logo-mobile.png' : '/logo.png';
    console.log(isMobile);

    return (
        <StyledLogo src={ logoPath }></StyledLogo>
    );
};

export default Logo;