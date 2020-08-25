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
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [count, setCount] = React.useState(0);

    const getUserInput = event => {
        setInput(event.target.value);
        setCount(event.target.textLength);
    }

    const InputConversion = event => {
        // Take user input and store its value to an array that can be compared to Planco matches
        let userInput = input.split(/(\W+|\s)/);
        let outputString = '';
        
        // Iterate through user input to separate earch term
        for (let i = 0; i < userInput.length; i++) {
            const inputText = userInput[i].toLocaleLowerCase();
            let counter = 0;

            // Iterate through Data to see if there is a match
            for (let j = 0; j < Data.length; j++) {
                const match = Data[j].eng.toLocaleLowerCase();
                const planco = Data[j].plc;
                
                // If a match has been found, setOutput to term
                if (inputText === match) {
                    // setOutput(output => planco);
                    outputString += planco;
                } else {
                    if (inputText === /\W/){
                        outputString += planco;
                    }
                    counter++;
                }

                // If there are no matches, return the input
                if (counter === Data.length) {
                    outputString += inputText;
                }
            }
        }
        setOutput(outputString);
        return <p>{output}</p>
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
                    maxLength="250">{input}</Input>
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
                        <InputConversion />
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
