import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Color scheme
export const color = {
    // Constants
    action: 'rgb(0, 111, 255)',
    white: 'rgb(255, 255, 255)',

    // Background colors
    lightBackground: 'rgb(255, 255, 255)',
    darkBackground: 'rgb(41, 43, 51)',

    // Element colors
    lightDefaultElement: 'rgb(240, 240, 245)',
        lightFocusElement: 'rgba(0, 111, 255, 0.15)',

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

// Containers
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 100vh;
    margin: 0 auto;
`;

// Global styles
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow: none scroll;
    }
    
    /* Defaul text */
    h1, p, a, li, span, em, textarea, .button{
        font-family: Arial, Helvetica, sans-serif;
    }

    span, em, .button {
        font-size: 12px;
    }

    p, textarea {
        font-size: 20px;
    }

    p {
        margin-right: 5px;
    }

    ul, li , a{
        list-style: none;
        text-decoration: none;
    }

    textarea {
        outline: none;
        resize: none;
    }

    /* CTA */
    .cta {
        display: flex;
        align-items: center;
        justify-content: center;

        background: none;

        width: 50px;
        height: 25px;
        margin-left: auto;

        border: none;
        border-left: solid rgba(0, 0, 0, 0.15) 1px;
        cursor: pointer;
    }

    /* List items */
    .list-item {
        display: flex;
        flex-direction: row;
		align-items: center;

        height: 45px;
		margin-left: 15px;
        margin-bottom: 10px;
	}

    /* Icons */
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 25px;
        height: 25px;

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

        span, em {
            color: ${color.lightSecondaryText}
        }

        .component {
            background-color: ${color.lightDefaultElement};
            border-radius: 10px;
        }

        .focus {
            background: ${color.lightFocusElement};

            p, button {
                color: ${color.lightFocusText};
            }

            span, em, button {
                color: ${color.lightFocusSencondaryText};
                border-color: rgba(16, 92, 191, 0.15);
            }
        }
    }

    /* Dark Theme */
    .dark-theme {
        body {
            background: ${color.darkBackground};
            color: ${color.darkDefaultText};
        }

        p, a {
            color: ${color.darkDefaultText};
        }

        span, em {
            color: ${color.darkSecondaryText}
        }

        .component {
            background: ${color.darkDefaultElement};
            border-radius: 10px;

            .cta {
                background: ${color.darkCTA};
            }
        }

        .focus {
            background: ${color.darkFocusElement};

            p {
                color: ${color.darkFocusText}
            }

            span, em {
                color: ${color.darkFocusSencondaryText}
            }
        }
    }
`;

export default GlobalStyle;