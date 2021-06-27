import styled from 'styled-components';

export const AvatarImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 10rem 0;
`;

export const AvatarHeader = styled.h1`
text-align: center;
`;

export const AvatarSubHeader = styled.h3`
text-align: center;
`;

export const AvatarIcons = styled.div`
margin-top: 1.4rem;
width: 180px;
display: flex;
justify-content: space-between;
img {
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
    transform: scale(1.1);
  }
}
`;

