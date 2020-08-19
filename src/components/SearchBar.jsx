import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 45px;

    border-radius: 10px;
`;

const SearchInput = styled.input`
    background: none;
    border: none;

    &:placeholder-shown{
        font-style: italic;
    }

    height: 25px;
    margin-right: 15px;
`;

export default function SearchBar() {
    return (
        <SearchContainer className="search-bar component">
            <SearchInput className="search-input content" placeholder="Search"/>
            <div className="cta">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.782" height="15.782" viewBox="0 0 15.782 15.782"><g fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"><ellipse cx="6.507" cy="6.642" rx="6.507" ry="6.642" stroke="none"/><ellipse cx="6.507" cy="6.642" rx="5.007" ry="5.142" fill="none"/></g><line x2="2.622" y2="2.846" transform="translate(11.04 10.816)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></svg>
            </div>
        </SearchContainer>
    );
}
