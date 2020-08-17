import React from 'react';
import styled from 'styled-components';

// SVGs
import MenuIcon from '../components/MenuIcon';

// Components
import SearchBar from '../components/SearchBar';

const AppTitle = styled.span`
    position: absolute;

    margin-top: 15px;
    margin-left: 45%;

    transform: translateX(-50%);
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 45px;
    margin-top: 5%;
`;

const MenuIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    cursor: pointer;

    span {
        background: rgb(0, 0, 0);

        height: 4px;
        width: 30px;
        margin: 3px 0;

        border-radius: 10px;

        &:first-child {
            width: 40px;
        }
    }
`;

export default function Header() {
    return (
        <HeaderContainer className="header">
            <AppTitle className="app-title">Hayo Translate</AppTitle>
            <MenuIconContainer>
                <MenuIcon/>
            </MenuIconContainer>
            <SearchBar/>
        </HeaderContainer>
    );
}
