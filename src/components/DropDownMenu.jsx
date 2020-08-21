import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
    position: absolute;

    width: 90px;
    max-height: 60%;

    overflow-y: scroll;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

export default function DropDownMenu() {
    const [toggle, setToggle] = React.useState(false);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const ListItems = letters.map((letter, key) => (
        <li 
        key={key}
        className="drop-down"
        onClick={() => console.log(letter)}>
            {letter}
        </li>
    ));
    
    const List = () => {
        if (toggle) {
            return (
                <ul>{ListItems}</ul>
            );
        } else {
            return null;
        }
    }
    
    return (
        <>
            <div className="list-item">
                <p>Z</p>
                <button className="cta" onClick={() => setToggle(toggle => !toggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.56" height="9.805" viewBox="0 0 13.56 9.805"><g transform="translate(383.947 -226.03) rotate(90)"><g transform="translate(233.722 381.834) rotate(180)"><line y1="4.671" x2="5.579" transform="translate(0 0)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="5.579" y2="4.663" transform="translate(0 4.671)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></g></g></svg>
                </button>
            </div>
            <ListContainer>
                <List/>
            </ListContainer>
        </>
    );
}
