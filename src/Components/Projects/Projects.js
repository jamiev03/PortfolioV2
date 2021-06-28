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
import phoneUI from '../../assets/phoneUI.png';
import nailsImg from '../../assets/nailsImg.png';
import portfolioImg from '../../assets/portfolioImg.png'

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectSubheader>Front-End Developement</ProjectSubheader>
        <ContentGrid>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Crypto Prices</h3>
                <p>A digital currency price finder </p>
                <p>Stack: React, Material UI, API</p>
                <GridItemHoverButtons>
                  <a href='https://github.com/jamiev03/material-ui-intro' target='_blank' rel="noreferrer">Code</a>
                  <a href='https://crypto-search-materialui.netlify.app/' target='_blank' rel="noreferrer">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
              <img src={cryptoAppImg} alt="crypto price app" />
            </a>
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Payment Landing</h3>
                <p>A digital currency payment system mockup</p>
                <GridItemHoverButtons>
                  <a href="https://github.com/jamiev03/TapGoV2" rel="noreferrer" target='_blank'>Code</a>
                  <a href="https://jamiev03.github.io/TapGoV2/" rel="noreferrer" target='_blank'>Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
            <img src={tapgoImg} alt="crypto card app" />
            </a>
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>PortfolioV2</h3>
                <p>Current portfolio Design using React</p>
                <GridItemHoverButtons>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
            <img src={portfolioImg} alt="current portfolio" />
            </a>
          </GridItem>
        </ContentGrid>
        <ProjectSubheader topPad='top'>Graphic Design and UI/UX</ProjectSubheader>
        <ContentGrid>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Nail Art Brand Design</h3>
                <p>A design template for nail art platform.</p>
                <GridItemHoverButtons>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
              <img src={nailsImg} alt="Nail brand design" />
            </a>
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Phone Settings UI</h3>
                <p>Settings menu design</p>
                <GridItemHoverButtons>
                  <a href="https://github.com/jamiev03/DailyUI--7" rel="noreferrer" target='_blank'>Code</a>
                  <a href="https://jamiev03.github.io/DailyUI--7/" rel="noreferrer" target='_blank'>Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
            <img src={phoneUI} alt="phone ui" />
            </a>
          </GridItem>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Exchange</h3>
                <p>A digital currency exchange</p>
                <GridItemHoverButtons>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
                </GridItemHoverButtons>
              </GridItemHover>
            </GridItemOverlay>
            <a href="#">
            <img src={platforma} alt="crypto exchange dashboard" />
            </a>
          </GridItem>
        </ContentGrid>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
