import React from 'react';
import styled from 'styled-components';

// Styles
import { ContentContainer } from '../styles/Containers';

const TranslatorContainer = styled.div`
    width: 100%;
    min-height: 435px;
`;

const IntputContainer = styled.div`
    display: flex;

    width: 100%;
    min-height: 200px;
    margin-top: 20px;
`;

const OutputContainer = styled.div`
    display: flex;

    width: 100%;
    height: auto;
    margin-top: 10px;
`;

const LanguageHeading = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`;

const InputCount = styled.div`
    position: inherit;
    display: flex;
    justify-content: right;

    height: 100%;

    span {
        text-align: right;
        margin-top: auto;
    }
`;

const CopyButton = styled.button`
    margin: 10px 0 0 auto;
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
    min-height: 150px;

    p {
        overflow-wrap: break-word;
        overflow-y: auto;
        content: '';
    }
`;

export default function Translate() {
    return (
        <TranslatorContainer className="translate-page-content">
            <IntputContainer className="input component">
                <ContentContainer className="input-content">
                    <LanguageHeading>
                        <span>English</span>
                        <div className="cancel-icon">
                            <span></span>
                            <span></span>
                        </div>
                    </LanguageHeading>
                    <Input className="user-input" rows="5"/>
                    <InputCount className="input-counter">
                        <span>0 / 250</span>
                    </InputCount>
                </ContentContainer>
            </IntputContainer>
            <OutputContainer className="output component focus">
                <ContentContainer>
                    <LanguageHeading>
                        <span>Planco</span>
                    </LanguageHeading>
                    <Output>
                        <p className="user-output"></p>
                    </Output>
                </ContentContainer>
            </OutputContainer>
            <CopyButton className="button">Copy</CopyButton>
        </TranslatorContainer>
    )
}
