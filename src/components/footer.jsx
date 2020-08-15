import React from 'react';
import styled from 'styled-components';

// Components
import Navigation from './Navigation';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: auto;
    margin-bottom: 50px;
`;

export default function Footer() {
    return (
        <FooterContainer id="footer">
            <Navigation/>
        </FooterContainer>
    )
}
