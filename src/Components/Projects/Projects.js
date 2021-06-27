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
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
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
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
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
        <ProjectSubheader topPad='top'>Graphic Design and UI/UX</ProjectSubheader>
        <ContentGrid>
          <GridItem>
            <GridItemOverlay>
              <GridItemHover>
                <h3>Crypto Prices</h3>
                <p>A digital currency price finder </p>
                <GridItemHoverButtons>
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
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
                  <a href="#">Code</a>
                  <a href="#">Demo</a>
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
