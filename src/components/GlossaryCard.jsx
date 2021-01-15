import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    cursor: pointer;
    margin-bottom: 10px;

    .content {
        flex-direction: column;
        padding: 10px 15px;

        margin: 0;
    }
`;

const EnglishInfo = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
`;

const PlancoInfo = styled.div`
    width: 100%;
    margin-top: 10px;

    border-top: solid rgba(0, 0, 0, 0.15) 1px;

    p {
        margin-top: 10px;
    }
`;

export default function GlossaryCard(props) {
    const [toggle, setToggle] = React.useState(false);

    const RevealInfo = (props) => {
        return toggle ?
            <PlancoInfo className="more-info">
                <p className="light">{props.plc}</p>
                <em>{props.pro}</em>
            </PlancoInfo> 
            : null;
    }

    return (
        <CardContainer className="component glossary-card-content" onClick={() => setToggle(toggle => !toggle)}>
            <div className="content">
                <EnglishInfo>
                    <p>{props.eng}</p>
                    <em>{props.pos}</em>
                </EnglishInfo>
                <RevealInfo show={toggle} plc={props.plc} pro={props.pro}/>
            </div>
        </CardContainer>
    );
}
