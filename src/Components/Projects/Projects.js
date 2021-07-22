import React from "react";
import { ProjectsContainer, ProjectSubheader } from "./Projects.style";
import {
  ContentGrid,
  GridItem,
  GridItemOverlay,
  GridItemHover,
  GridItemHoverButtons
} from "../ContentContainer/ContentContainer.style";
import cryptoAppImg from "../../assets/cryptoAppImg.png";
import tapgoImg from "../../assets/tapgoImg.png";
import platforma from "../../assets/platforma.png";
import laos from '../../assets/laosAwaits.png';
import nailsImg from '../../assets/nailsImg.png';
import portfolioImg from '../../assets/portfolioImg.png'

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectSubheader>Front-End Development</ProjectSubheader>
        <ContentGrid>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Crypto Prices</h3>
                <p>A digital currency price finder </p>
                <p><u>Stack:</u> React, Material UI, API</p>
                <GridItemHoverButtons>
                  <a href='https://github.com/jamiev03/material-ui-intro' target='_blank' rel="noreferrer">Code</a>
                  <a href='https://crypto-search-materialui.netlify.app/' target='_blank' rel="noreferrer">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
              <img src={cryptoAppImg} alt="crypto price app" />
            
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Payment Landing</h3>
                <p>A digital currency payment system mockup</p>
                <p><u>Stack:</u> HTML, Sass, Javascript</p>
                <GridItemHoverButtons>
                  <a href="https://github.com/jamiev03/TapGoV2" rel="noreferrer" target='_blank'>Code</a>
                  <a href="https://jamiev03.github.io/TapGoV2/" rel="noreferrer" target='_blank'>Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
            <img src={tapgoImg} alt="crypto card app" />
            
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>PortfolioV2</h3>
                <p>Current portfolio Design using React</p>
                <p><u>Stack:</u> React, Styled Components</p>
                <GridItemHoverButtons>
                  <a href="https://github.com/jamiev03/PortfolioV2" target='_blank' rel="noreferrer">Code</a>
                  <a href="http://jamiev.netlify.app/">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
            <img src={portfolioImg} alt="current portfolio" />
            
          </GridItem>
        </ContentGrid>
        <ProjectSubheader topPad='top'>Graphic and Web Design</ProjectSubheader>
        <ContentGrid>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Nail Art</h3>
                <p>Social media design for nail art platform.</p>
                <p><u>Stack:</u> Figma, Photopea</p>
                <GridItemHoverButtons>
                  <a href="https://www.instagram.com/missbellatracey/" target='_blank' rel="noreferrer">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
              <img src={nailsImg} alt="Nail brand design" />
            
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Laos Awaits</h3>
                <p>Travel/Blog site</p>
                <p><u>Stack:</u> Wordpress, Elementor</p>
                <GridItemHoverButtons>
                  <a href="https://laosawaits.com/" rel="noreferrer" target='_blank'>Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
            <img src={laos} alt="website front page" />
            
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Exchange</h3>
                <p>A digital currency exchange</p>
                <p><u>Stack:</u> HTML, CSS</p>
                <GridItemHoverButtons>
                  <a href="https://github.com/jamiev03/platforma" target='_blank' rel="noreferrer">Code</a>
                  <a href="https://jamiev03.github.io/platforma/" target='_blank' rel="noreferrer">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            
            <img src={platforma} alt="crypto exchange dashboard" />
            
          </GridItem>
        </ContentGrid>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
