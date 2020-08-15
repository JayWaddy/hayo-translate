import { createGlobalStyle } from 'styled-components';

// Color scheme
export const color = {
    // Constants
    action: 'rgb(0, 111, 255)',
    white: 'rgb(255, 255, 255)',

    // Background colors
    lightBackground: 'rgb(255, 255, 255)',
    darkBackground: 'rgb(41, 43, 51)',

    // Element colors
    lightCTA: 'rgb(235, 235, 235)',
    lightDefaultElement: 'rgb(235, 235, 240)',
        lightFocusElement: 'rgba(0, 111, 255, 0.15)',

    darkCTA: 'rgb(67, 69, 82)',
    darkDefaultElement: 'rgbs(67, 69, 82, 0.5)',
        darkFocusElement: 'rgba(0, 111, 255, 0.5)',

    // Text colors
    lightDefaultText: 'rgb(0, 0, 0)',
    lightSecondaryText: 'rgba(0, 0, 0, 0.35)',
        lightFocusText: 'rgb(16, 92, 191)',
        lightFocusSencondaryText: 'rgba(16, 92, 191, 0.5)',


    darkDefaultText: 'rgb(255, 255, 255)',
    darkSeccondaryText: 'rgba(255, 255, 255, 0.5)',
        darkFocusText: 'rgb(0, 162, 255)',
        darkFocusSeccondaryText: 'rgba(0, 162, 255, 0.5)'
}

// Global styles
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow: hidden;
    }
    
    /* Defaul text */
    h1, p, a, li, span, textarea, .button{
        font-family: Arial, Helvetica, sans-serif;
    }

    span, .button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 20px;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }

    /* Button */
    .button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${color.action};
        color: ${color.white};

        width: 75px;
        height: 45px;

        border: none;
        border-radius: 10px;

        cursor: pointer;
    }

    /* Cancel button */
    .cancel-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 25px;
        height: 30px;

        cursor: pointer;

        span {
            position: absolute;

            background: ${color.action};
            border-radius: 10px; 

            width: 25px;
            height: 3px;

            transform: rotate(45deg);

            &:first-child {
                transform: rotate(-45deg);
            }
        }
    }

    /* Light Theme */
    .light-theme {
        body {
            background: ${color.lightBackground};
        }

        p, a {
            color: ${color.lightDefaultText};
        }

        span {
            color: ${color.lightSecondaryText}
        }

        .component {
            background-color: ${color.lightDefaultElement};
            border-radius: 10px;

            .cta {
                background: ${color.lightCTA};
            }
        }

        .focus {
            background: ${color.lightFocusElement};

            p {
                color: ${color.lightFocusText};
            }

            span {
                color: ${color.lightFocusSencondaryText}
            }
        }
    }

    /* Dark Theme */
    .dark-theme {
        body {
            background: ${color.darkBackground};
        }

        p {
            color: ${color.darkDefaultText};
        }

        span {
            color: ${color.darkSecondaryText}
        }

        .component {
            background: ${color.darkDefaultElement};

            .cta {
                background: ${color.darkCTA};
            }

            .focus {
                background: ${color.darkFocusElement};
                color: ${color.lightFocusText};

                span {
                    color: ${color.darkFocusSencondaryText}
                }
            }
        }
    }
`;

export default GlobalStyle;