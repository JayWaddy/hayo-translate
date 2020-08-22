import React from 'react';
import styled from 'styled-components';

// SVGs
import ArrowIcon from '../components/ArrowIcon';
import DropDownMenu from '../components/DropDownMenu';
import GlossaryCard from '../components/GlossaryCard';

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

export default function Glossary() {
	return (
		<>
			<GlossaryContainer className="glossary-page-content">
				<LetterSearch className="letter-search component">
					<DropDownMenu/>
				</LetterSearch>
				<GlossaryContent>
					<div className="glossary-content">
						<GlossaryCard 
						eng="Zero" 
						pos="(num)" 
						plc="Zoop"
						pro="Zoop"/>
					</div>
					<div className="glossary-content">
						<GlossaryCard 
						eng="Zero-g" 
						pos="(n)" 
						plc="Zoop-g"
						pro="Zoop-g"/>
					</div>
					<div className="glossary-content">
						<GlossaryCard 
						eng="Zone" 
						pos="(n)" 
						plc="Zinn"
						pro="Zin"/>
					</div>
					<div className="glossary-content">
						<GlossaryCard 
						eng="Zoom" 
						pos="(v)" 
						plc="Zuul"
						pro="Zool"/>
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