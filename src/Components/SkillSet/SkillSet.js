import React from "react";
import {
  ContentGrid,
  GridItem,
} from "../ContentContainer/ContentContainer.style";
import { SkillSetIcon, SkillSetText, SkillSetContent } from "./SkillSet.style";
import uiux from "../../assets/uiux.png";
import webDevIcon from '../../assets/webdevIcon.png';
import brush from '../../assets/brushIcon.png';

const SkillSet = () => {
  return (
    <>
      <ContentGrid>
        <GridItem>
          <SkillSetContent>
            <SkillSetIcon>
              <img src={uiux} alt="ui/ux icon" />
            </SkillSetIcon>
            <SkillSetText>
              <h3>UI/UX Design</h3>
              <p>Understanding of user interface and usability standards </p>
            </SkillSetText>
          </SkillSetContent>
        </GridItem>
        <GridItem bgColor="yellow">
        <SkillSetContent>
            <SkillSetIcon>
              <img src={webDevIcon} alt="terminal icon" />
            </SkillSetIcon>
            <SkillSetText>
              <h3>Web Developement</h3>
              <p>Knowledgeable in a variety of web developement technologies</p>
            </SkillSetText>
          </SkillSetContent>
        </GridItem>
        <GridItem bgColor="red">
        <SkillSetContent>
            <SkillSetIcon>
              <img src={brush} alt="paintbrush" />
            </SkillSetIcon>
            <SkillSetText>
              <h3>Graphic Design</h3>
              <p>Profficient in graphic design terminology and tools.</p>
            </SkillSetText>
          </SkillSetContent>
        </GridItem>
      </ContentGrid>
    </>
  );
};

export default SkillSet;
