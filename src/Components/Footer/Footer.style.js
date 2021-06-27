import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10rem;
`;

export const FooterBar = styled.div`
background-color: var(--darkBlue);
width: 85%;
height: 50px;
margin: 2rem auto 0 auto;
text-align: center;
border-top-left-radius: 20px;
border-top-right-radius: 20px;

h3 {
    padding-top: 1rem;
    font-size: 14px;
}
`;

export const UpArrow = styled.img`
    width: 54px;
    height: auto;
    cursor: pointer;
    animation: heart-pulse 1.8s infinite ease-out;
}

@keyframes heart-pulse {
  50% {
    transform: scale(1.0);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
`;