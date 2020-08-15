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

        transition: 0.2s;

        &:hover {
            cursor: pointer;
        }
    }

    .active-link li {
        color: ${color.white};
    }
`;

const Selector = styled.div`
    position: absolute;

    width: ${navbarWidth / 2}px;
    height: ${navbarHeight}px;

    transition: 0.2s;
`;

export default function Navigation() {
    const [toggle, setToggle] = React.useState(false);

    const setLinkToTranslate = () => {
        // Do nothing if link is already active
        if (toggle === false) return null;
        
        moveActiveLink();
        setToggle(toggle => false);
    }

    const setLinkToGlossary = () => {
        // Do nothing if link is already active
        if (toggle === true) return null;

        moveActiveLink();
        setToggle(toggle => true);
    }

    const moveActiveLink = () => {
        const selector = document.querySelector('.nav-selector')
        if (toggle === true) {
            selector.style.transform = 'translateX(0%)';
            return;
        }
        if (toggle === false) {
            selector.style.transform = 'translateX(100%)';
            return;
        }
    }

    return (
        <>
        <nav>
            <Navbar className="component">
                <Selector className="nav-selector button"/>
                <NavLink 
                exact
                to="/"
                activeClassName="active-link"
                onClick={setLinkToTranslate}
                >
                    <li 
                    className="nav-child-translate active-page"
                    >Translate</li>
                </NavLink> 
                <NavLink 
                exact
                to="/glossary"
                activeClassName="active-link"
                onClick={setLinkToGlossary}
                >
                    <li 
                    className="nav-child-glossary"
                    >Glossary</li>
                </NavLink>
            </Navbar>
        </nav>
        </>
    );
}
