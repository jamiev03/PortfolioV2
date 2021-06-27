import styled from "styled-components";

export const ContentContainer = styled.div`
  /* border: 2px solid red; */
  margin: 0 auto;
  height: auto;
  max-width: 1080px;
`;

export const ContentHeader = styled.div`
  position: relative;
  padding-bottom: 55px;
  padding-top: 130px;
  h1 {
    padding-left: 15px;
  }
  img {
    position: absolute;
  }
`;

export const ContentGrid = styled.div`
  display: flex;
  margin: -15px;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

export const GridItem = styled.div`
  background-color: ${({bgColor}) => 
    bgColor === 'red' && 'var(--red)' ||
    bgColor === 'yellow' && 'var(--yellow)' || 
    'var(--darkBlue)'
  };
  position: relative;
  border-radius: 20px;
  min-width: 300px;
  height: 267px;
  flex: 1 1 260px;
  margin: 15px;
  overflow: hidden;
  box-shadow:
  0 0.7px 1.3px -12px rgba(0, 0, 0, 0.118),
  0 1.7px 3.2px -12px rgba(0, 0, 0, 0.17),
  0 3.1px 6px -12px rgba(0, 0, 0, 0.21),
  0 5.6px 10.7px -12px rgba(0, 0, 0, 0.25),
  0 10.4px 20.1px -12px rgba(0, 0, 0, 0.302),
  0 25px 48px -12px rgba(0, 0, 0, 0.42)
;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const GridItemOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.2s ease;
  background-color: rgba(37, 45, 60, 0.85);

  :hover {
    opacity: 1;
  }
`;

export const GridItemHover = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 260px;

  h3 {
    font-weight: 600;
    padding-bottom: .3rem;
  }

  p {
    line-height: 1.4;
    font-weight: 500;
  }
`;

export const GridItemHoverButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  a {
    margin: 1rem;
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    padding: .5rem 1rem;
    background-color: var(--red);
    border-radius: 20px;
  }
`;
