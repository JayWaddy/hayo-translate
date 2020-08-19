import React from 'react';
import styled from 'styled-components';

// SVGs
import SearchIcon from '../components/SearchIcon';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 45px;
    margin-top: 5%;
    padding: 0 15px;

    border-radius: 10px;
`;

const SearchInput = styled.input`
    background: none;
    border: none;

    &:placeholder-shown{
        font-style: italic;
    }

    width: 100%;
    height: 25px;
    /* margin: 0 15px; */
`;

export default function SearchBar() {
    return (
        <SearchContainer className="component">
            <SearchInput placeholder="Search"/>
            <div className="cta">
                <SearchIcon/>
            </div>
        </SearchContainer>
    );
}
