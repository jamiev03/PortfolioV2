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
        <img src={AvatarImg} />
        <AvatarHeader>
            Jamie V.
        </AvatarHeader>
        <AvatarSubHeader>
            I am a Front-end Developer.
        </AvatarSubHeader>
        <AvatarIcons>
        <img src={linkedin} />
        <img src={mail} />
        <img src={github} />
        </AvatarIcons>
      </AvatarImage>
    </>
  );
};

export default Avatar;
