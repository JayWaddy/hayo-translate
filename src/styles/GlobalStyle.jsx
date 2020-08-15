import { createGlobalStyle } from 'styled-components';

// Style
export const color = {
    // Constants
    action: 'rgb(0, 111, 255)',
    white: 'rgb(255, 255, 255)',

    // Background colors
    lightBackground: 'rgb(255, 255, 255)',
    darkBackground: 'rgb(41, 43, 51)',

    // Element colors
    lightCTA: 'rgb(235, 235, 235)',
    lightDefaultElement: 'rgb(244, 244, 244)',
        lightFocusElement: 'rgba(0, 111, 255, 0.15)',

    darkCTA: 'rgb(67, 69, 82)',
    darkDefaultElement: 'rgbs(67, 69, 82, 0.5)',
        darkFocusElement: 'rgba(0, 111, 255, 0.5)',

    // Text colors
    lightDefaultText: 'rgb(0, 0, 0)',
    lightSecondaryText: 'rgba(0, 0, 0, 0.3)',
        lightFocusText: 'rgb(16, 92, 191)',
        lightFocusSencondaryText: 'rgba(16, 92, 191, 0.5)',


    darkDefaultText: 'rgb(255, 255, 255)',
    darkSeccondaryText: 'rgba(255, 255, 255, 0.5)',
        darkFocusText: 'rgb(0, 162, 255)',
        darkFocusSeccondaryText: 'rgba(0, 162, 255, 0.5)'
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* Defaul text */
    h1, p, a, li, .button{
        font-family: Arial, Helvetica, sans-serif;
    }
    
    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    /* Button */
    .button {
        background: ${color.action};
        color: ${color.white};

        width: 75px;
        height: 45px;

        border-radius: 10px;

        cursor: pointer;
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

            .focus {
                background: ${color.lightFocusElement};
                color: ${color.lightFocusText};

                span {
                    color: ${color.lightFocusSencondaryText}
                }
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