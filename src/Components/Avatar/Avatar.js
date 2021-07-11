import React from "react";
import AvatarImg from "../../assets/avatar.png";
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
        <img src={linkedin} alt='linkedin'/>
        <img src={mail} alt='email'/>
        <img src={github} alt='github'/>
        </AvatarIcons>
      </AvatarImage>
    </>
  );
};

export default Avatar;
