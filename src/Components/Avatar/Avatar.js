import React from "react";
import AvatarImg from "../../assets/avatar2.png";
import github from '../../assets/githubIcon.png';
import linkedin from '../../assets/linkedinIcon.png';
import mail from '../../assets/mailIcon.png';
import { AvatarImage, AvatarHeader, AvatarSubHeader, AvatarIcons } from "./Avatar.style";

const Avatar = () => {
  return (
    <>
      <AvatarImage>
        <img src={AvatarImg} alt='avatar'/>
        <AvatarHeader>
            Jamie V.
        </AvatarHeader>
        <AvatarSubHeader>
            I am a Front-end Developer.
        </AvatarSubHeader>
        <AvatarIcons>
        <a href='https://www.linkedin.com/in/jamie-vongprachanh-0a2807192/'><img src={linkedin} alt='linkedin'/></a>
        <a href="mailto:jamie@laosawaits.com"><img src={mail} alt='email'/></a>
        <a href='https://github.com/jamiev03'><img src={github} alt='github'/></a>
        </AvatarIcons>
      </AvatarImage>
    </>
  );
};

export default Avatar;
