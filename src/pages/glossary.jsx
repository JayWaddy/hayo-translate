import React from 'react';
import styled from 'styled-components';

// SVGs
import ArrowIcon from '../components/ArrowIcon';
import GlossaryCard from '../components/GlossaryCard';

// Scripts
// import Data from '../scripts/data';

export const GlossaryContainer = styled.div`
    width: 100%;
	height: auto;
`;

const LetterSearch = styled.div`
	width: 90px;
	margin: 10px auto 0 auto;

	.letter-dropdown {
		display: flex;
		align-items: center;
	}
`;

const GlossaryContent = styled.div`
	overflow-y: scroll;
	margin-bottom: 10px;

	max-height: 68vh;
`;

const LinksContainer = styled.div`
	margin-top: 10px;
`;

const DropDownContainer = styled.div`
	position: relative;
	margin-top: 10px;
	/* margin-bottom: 0; */

	.component {
		display: flex;
		align-items: center;

		width: 90px;
		height: 45px;
	}

	.active-letter {
		margin-left: auto;
	}
`;

const ListContainer = styled.ul`
    position: absolute;

    width: 90px;
    max-height: 80vw;
	margin-top: 10px;

    overflow-y: scroll;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;


export default function Glossary() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const [active, setActive]  = React.useState(letters[0]);
	const [toggle, setToggle] = React.useState(false);
	
	// Dropdown Menu
    const ListItems = letters.map((letter, key) => (
        <li 
        className="drop-down"
        key={key}
        onClick={() => {
            setActive(letter); 
            setToggle(false);
            }}>
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
	const RenderContent = event => {
		// Determine which letter is active
		// Iterate through Data
		// If Data begins with the active letter, load each term
		// If Data does not begin with the active letter, return null

		return null;
	}

	return (
		<>
			<DropDownContainer>
				<div className="component">
					<p className="active-letter" >{active}</p>
					<button className="cta" onClick={() => setToggle(toggle => !toggle)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="13.56" height="9.805" viewBox="0 0 13.56 9.805"><g transform="translate(383.947 -226.03) rotate(90)"><g transform="translate(233.722 381.834) rotate(180)"><line y1="4.671" x2="5.579" transform="translate(0 0)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/><line x2="5.579" y2="4.663" transform="translate(0 4.671)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="3"/></g></g></svg>
					</button>
				</div>
				<ListContainer>
					<List onBlur={() => setToggle(false)}/>
				</ListContainer>
            </DropDownContainer>

			
			<GlossaryContainer className="glossary-page-content">
				<LetterSearch className="letter-search component">
				</LetterSearch>
				<GlossaryContent>
					<RenderContent/>
					<div className="glossary-content">
						<GlossaryCard 
						eng="Test Card" 
						pos="(n)" 
						plc="Kyew Dacho"
						pro="kyoo da-choo"/>
					</div>
					<LinksContainer>
					<div className="component">
						<div className="list-item">
							<span>About Hayo</span>
							<button className="cta">
								<ArrowIcon/>
							</button>
						</div>
					</div>
					<div className="component">
						<div className="list-item">
							<span>Official Planco site</span>
							<button className="cta">
								<ArrowIcon/>
							</button>
						</div>
					</div>
				</LinksContainer>
				</GlossaryContent>
			</GlossaryContainer>
		</>
	);
}