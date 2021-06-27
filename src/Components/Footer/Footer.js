import React from 'react'
import { FooterContainer, FooterBar, UpArrow } from './Footer.style'
import { animateScroll as scroll } from "react-scroll";
import upArrow from '../../assets/upArro.png'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }
    return (
        <>
        <FooterContainer>
          <UpArrow src={upArrow} onClick={toggleHome}/>
        <FooterBar>
            <h3>Designed/coded by: Jamie V. - 2021.</h3>
        </FooterBar>  
        </FooterContainer>
        
        </>
    )
}

export default Footer
