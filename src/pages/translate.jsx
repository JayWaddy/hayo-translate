import React from 'react';
import styled from 'styled-components';

// SVGs
import CancelIcon from '../components/CancelIcon';

// Scripts
import Data from '../scripts/data';

export const TranslateContainer = styled.div`
    width: 100%;
    min-height: vh;

    .input-content, .output-content {
        flex-direction: column;
    }

    .input-content {
        width: 100%;
    }
`;

const IntputContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

const OutputContainer = styled.div`
    display: flex;

    width: 100%;
    height: auto;
    margin-top: 10px;

    .output-content {
        width: 100%;
    }
`;

const LanguageHeading = styled.div`
    display: flex;
    justify-content: space-between;

    .cancel-icon {
        cursor: pointer;

        transform: translateX(15px);
    }
`;

const InputCount = styled.div`
    position: inherit;
    display: flex;
    justify-content: right;

    span {
        text-align: right;
        margin-top: auto;
    }
`;

const CopyButton = styled.div`
    justify-content: right;

    button {
        transform: translateX(10px);
    }
`;

const Input = styled.textarea`
    background: none;
    font-size: 20px;

    width: 100%;
    margin-top: 10px;

    border: none;
`;

const Output = styled.div`
    width: 100%;
    min-height: 100px;

    p {
        overflow-wrap: break-word;
        overflow-y: auto;
        content: '';
    }
`;

export default function Translate(props) {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");
    const [count, setCount] = React.useState(0);

    const getUserInput = event => {
        setInput(event.target.value);
        setCount(event.target.textLength);
    }

    const InputConversion = event => {
        let userInput = input.split(/(\W+|\s)/);
        let outputString = "";

        // Iterate through user input to isolate earch term
        userInput.map(input => {
            const inputText = input.toLowerCase();
            let counter = 0;

            // Iterate through Data to see if terms match
            return Data.map(entry => {
                const match = entry.eng.toLowerCase();
                const planco = entry.plc;

                // If a match has been found, setOutput to term
                inputText === match ?
                    outputString += planco
                    : inputText === /\W/ ?
                        outputString += planco
                        : counter++;

                // If there are no matches, return the input
                return counter === Data.length ?
                    outputString += inputText
                    : null
            });
        });

        setOutput(outputString);
        return <p>{output}</p>;
    }

    return (
        <>
        <TranslateContainer className="translate-page-content">
            <IntputContainer className="input component">
                <div className="input-content content">
                    <LanguageHeading>
                        <span>English</span>
                        <div className="cancel-icon cta" onClick={() => setInput(input => '')}><CancelIcon/></div>
                    </LanguageHeading>
                    <Input 
                    className="user-input" 
                    onChange={getUserInput}
                    value={input}
                    name="textarea"
                    rows="4"
                    maxLength="250">
                        {input}
                    </Input>
                    <InputCount className="input-counter">
                        <span>{count} / 250</span>
                    </InputCount>
                </div>
            </IntputContainer>
            <OutputContainer className="output component focus">
                <div className="output-content content">
                    <LanguageHeading>
                        <span>Planco</span>
                    </LanguageHeading>
                    <Output>
                        <InputConversion/>
                    </Output>
                    <CopyButton>
                        <button className="cta">Copy</button>
                    </CopyButton>
                </div>
            </OutputContainer>
        </TranslateContainer>
        </>
    );
}
