import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --primary: #333F55;
    --darkBlue: #252D3C;
    --yellow: #F9A826;
    --red: #B73535;
    --white: #ffffff;
    --h1: 42px;
    --h3: 22px;

}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

h1 {
    font-size: var(--h1);
    font-weight: 700;
}

h3 {
    font-size: var(--h3);
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 20px;
      }
}

body {
   background: var(--primary); 
   color: var(--white);
}
`;

export const Button = styled.button`
width: 160px;
height: 44px;
background-color: var(--red);
color: var(--white);
font-size: 16px;
font-weight: 500;
border-radius: 10px;
border: none;
margin: 0 36px 36px 36px;
transition: all 0.2s ease-out;

&:hover {
    cursor: pointer;
    transform: scale(1.04);
}
`;

export default GlobalStyle;