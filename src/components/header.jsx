import React from 'react';
import styled from 'styled-components';

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

    width: 100%;
    height: 100%;

    padding-left: 8px;

    span {
        &:first-child {
            width: 18px;
            height: 18px;

            border: solid rgb(255, 255, 255) 3px;
            border-radius: 50%;
        }

        &:last-child {
            background: rgb(255, 255, 255);

            width: 9px;
            height: 3px;

            border-radius: 10px;

            transform: rotate(45deg) translate(1px, 10px);
        }
    }
`;

export default function Header() {
    return (
        <HeaderContainer className="header">
            <AppTitle className="app-title">Hayo Translate</AppTitle>
            <MenuIcon className="menu-icon">
                <span></span>
                <span></span>
            </MenuIcon>
            <SearchIcon className="search-icon button">
                <span></span>
                <span></span>
            </SearchIcon>
        </HeaderContainer>
    );
}
