import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    --color-primary: #364f6b;
    --color-primary-light: #8695a6;
    --color-primary-dark: #2b3f56;

    --color-secondary: #3fc1c9;
    --color-secondary-dark: #2c878d;
    --color-secondary-light: #c3ecee;

    --color-tertiary: #fc5185;
    --color-tertiary-dark: #b0395d;
    --color-tertiary-light: #fea8c2;

    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;

    --color-green: #24d16c;
    --color-green-dark: #0fd160;
    --color-red: #fc3232;

    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    --color-black: #000;
    --color-white: #fff;

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: 'Open Sans', sans-serif;;
        font-weight: 400;
        line-height: 2;
        max-width: 120rem;
        margin: 2rem auto 2rem;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default function Page({ children, cool }) {
    return (
    <div>
        <GlobalStyles />
        <Header />
        <h2>I am the page component.</h2>
        <h3>{cool}</h3>
        {children}
    </div>
    );
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any,
}