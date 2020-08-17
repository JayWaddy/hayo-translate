import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Style
import { color } from '../styles/GlobalStyle';

const navbarWidth = 150;
const navbarHeight = 45;

const Navbar = styled.ul`
    display: flex;
    flex-direction: row;

    width: ${navbarWidth}px;
    height: ${navbarHeight}px;

    li {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        width: ${ navbarWidth / 2 }px;
        height: 100%;
        font-size: 12px;
        color: ${color.lightSecondaryText};

        &:hover {
            cursor: pointer;
        }
    }

    .nav-translate {
        border-radius: 10px 0 0 10px;
    }

    .nav-glossary {
        border-radius: 0 10px 10px 0;
    }

    .active-link li {
        background: ${color.action};
        color: ${color.white};
    }
`;

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);

    const setToTranslate = () => {
        // Do nothing if link is already active
        if (toggle === false) return null;
        
        setToggle(toggle => false);
    }

    const setToGlossary = () => {
        // Do nothing if link is already active
        if (toggle === true) return null;

        setToggle(toggle => true);
    }

    return (
        <>
        <nav>
            <Navbar className="component">
                <NavLink 
                exact
                to="/"
                activeClassName="active-link"
                onClick={setToTranslate}>
                    <li className="nav-translate">Translate</li>
                </NavLink> 
                <NavLink 
                exact
                to="/glossary"
                activeClassName="active-link"
                onClick={setToGlossary}>
                    <li className="nav-glossary">Glossary</li>
                </NavLink>
            </Navbar>
        </nav>
        </>
    );
}
