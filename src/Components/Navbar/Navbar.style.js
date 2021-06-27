import styled from 'styled-components';
import { Link } from 'react-scroll'

export const Nav = styled.div`
  padding: 24px 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "600px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  padding: 0 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--white);
  transition: all 0.3s ease-in;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: var(--yellow);
  }
`;


export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 5px;
    width: 30px;
    background: #fff;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;