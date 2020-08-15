import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 45px;
    margin-top: 5%;

    .menu-icon-expand {
        width: 80% !important;
    }
`;

const MenuIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 45px;
    height: 45px;

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

const SearchIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Header() {
    return (
        <HeaderContainer className="header">
            <MenuIcon className="menu-icon">
                <span></span>
                <span></span>
            </MenuIcon>
            <SearchIcon className="search-icon button">
                Icon
            </SearchIcon>
        </HeaderContainer>
    )
}
