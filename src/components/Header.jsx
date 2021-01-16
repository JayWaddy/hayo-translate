import React from 'react';
import styled from 'styled-components';

// Components
import MenuButton from "./MenuButton"
import SearchBar from '../components/SearchBar';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 45px;
    margin-top: 5%;
`;

export default function Header() {
    return (
        <HeaderContainer className="header">
            <MenuButton/>
            <SearchBar/>
        </HeaderContainer>
    );
}
