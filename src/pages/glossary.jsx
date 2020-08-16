import React from 'react';
import styled from 'styled-components';

// Styles
import { ContentContainer } from '../styles/Containers';

// Components
// import GlossaryCard from '../components/GlossaryCard';

// SVGs
import ArrowIcon from '../components/ArrowIcon';
import DropDownIcon from '../components/DropDownIcon';

export const GlossaryContainer = styled.div`
    width: 100%;
	height: auto;
`;

const SearchByLetter = styled.div`
	margin-top: 20px;

	.letter-dropdown {
		display: flex;
		align-items: center;
	}
`;

const GlossaryContent = styled.div`
	overflow-y: scroll;
	margin-top: 20px;
	margin-bottom: 10px;

	max-height: 68vh;
`;

const LinksContainer = styled.div`
	margin-top: 20px;
`;

export default function Glossary() {
	return (
		<>
			<GlossaryContainer className="glossary-page-content">
				<SearchByLetter className="search-by-letter component">
					<ContentContainer className="list-item">
						<span>Seearch by letter</span>
						<button className="cta">
							<span className="letter-dropdown">
								<p>Z</p>
								<span>
									<DropDownIcon/>
								</span>
							</span>
						</button>
					</ContentContainer>
				</SearchByLetter>
				<GlossaryContent>
					<div className="glossary-content">
						Content will be displayed here.
					</div>
					<LinksContainer>
					<div className="component">
						<div className="list-item">
							<span>Visit the official Planco site</span>
							<button className="cta">
								<ArrowIcon/>
							</button>
						</div>
					</div>
					<div className="component">
						<div className="list-item">
							<span>More about Hayo</span>
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