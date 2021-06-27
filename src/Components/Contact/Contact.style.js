import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactHeader = styled.div`
  width: 800px;
  position: relative;
  padding-bottom: 55px;
  padding-right: 4rem;

  @media (max-width: 768px) {
    width: 360px;
    padding-right: 0;
  }
  h3 {
    font-size: 22px;
    padding-top: 1rem;
    padding-left: 15px;
    font-weight: 600;
  }
  img {
    position: absolute;

    @media (max-width: 768px) {
      height: 100px;
      width: 100px;
    }
  }
  p {
    padding-left: 15px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: var(--red);
    font-weight: 500;
  }
`;

export const ContactButton = styled.button`
  width: 160px;
  height: 44px;
  background-color: var(--red);
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  margin: 12px 0 0 0;
  transition: all 0.2s ease-out;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;
