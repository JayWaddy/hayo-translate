import React from 'react';
import styled from 'styled-components';

// Styles
import { color } from '../styles/GlobalStyle';

// SVGs
import SearchIcon from '../components/SearchIcon';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    background: ${color.action};

    min-width: 50px;
    height: 45px;

    border-radius: 10px;
`;

export default function SearchBar() {
    return (
        <SearchContainer>
            <div className="cta">
                <SearchIcon/>
            </div>
        </SearchContainer>
    );
}
