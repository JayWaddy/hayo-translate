import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        display: flex;
        justify-content: center;
        align-items: center;

        width: ${ navbarWidth / 2 }px;
        height: 100%;
        font-size: 12px;
        
        z-index: 2;

        &:hover {
            cursor: pointer;
        }

        .active-page p {
            color: ${color.white};
        }
    }

    .nav-child-translate {
        color: ${(props) => props.trans ? color.white : color.lightSecondaryText};
    }

    .nav-child-glossary {
        color: ${(props) => props.gloss ? color.white : color.lightSecondaryText};
    }
`;

const Selector = styled.div`
    position: absolute;
    width: ${ navbarWidth / 2 }px;
    height: ${navbarHeight}px;

    transition: 0.2s;
`;

export default function Navigation() {
    // const [trans, setTrans] = useState(true);
    // const [gloss, setGloss] = useState(false);

    // const selector = document.querySelector('.nav-selector');

    // Actiions
    // const setPageToTranslate = () => {
    //     setTrans(!trans);
    //     setGloss(false);
    // }

    // const setPageToGlossary = () => {
    //     setGloss(!gloss);
    //     setTrans(false);
    // }

    // if (trans) console.log('trans');
    // if (gloss) console.log('gloss');

    // Component
    return (
        <>
        <nav>
            <Navbar className="component">
                <Selector className="nav-selector button"/>
                <li 
                className="nav-child-translate active-page"
                >
                    <Link to="/">Translate</Link> 
                </li>
                <li 
                className="nav-child-glossary"
                >
                    <Link to="/glossary">Glossary</Link>
                </li>
            </Navbar>
        </nav>
        </>
    );
}
