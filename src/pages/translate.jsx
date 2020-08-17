import React from 'react';
import styled from 'styled-components';

// SVGs
import CancelIcon from '../components/CancelIcon';

export const TranslateContainer = styled.div`
    width: 100%;
    min-height: vh;

    .input-content, .output-content {
        flex-direction: column;
        margin: 15px;
    }

    .input-content {
        width: 100%;
    }
`;

const IntputContainer = styled.div`
    display: flex;
    margin-top: 20px;
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
    justify-content: right;;
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

export default function Translate() {
    return (
        <TranslateContainer className="translate-page-content">
            <IntputContainer className="input component">
                <div className="input-content">
                    <LanguageHeading>
                        <span>English</span>
                        <div className="cancel-icon"><CancelIcon/></div>
                    </LanguageHeading>
                    <Input className="user-input" rows="4"/>
                    <InputCount className="input-counter">
                        <span>0 / 250</span>
                    </InputCount>
                </div>
            </IntputContainer>
            <OutputContainer className="output component focus">
                <div className="output-content">
                    <LanguageHeading>
                        <span>Planco</span>
                    </LanguageHeading>
                    <Output>
                        <p className="user-output"></p>
                    </Output>
                    <CopyButton>
                        <button className="cta">Copy</button>
                    </CopyButton>
                </div>
            </OutputContainer>
        </TranslateContainer>
    );
}
