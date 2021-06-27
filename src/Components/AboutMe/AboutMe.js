import React from 'react';
import { AboutMeContainer, AboutMeText } from './AboutMe.style';
import { Button } from '../../Global.style';

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <AboutMeText>
                <h3>Hi I’m Jamie, based out of Waterloo, Canada. I enjoy creating interactive experiences that both work and look good. The field of internet technologies is so vast and I love how it allows me to learn new things everyday.</h3>
                <Button>Download CV</Button>
            </AboutMeText>
        </AboutMeContainer>
    )
}

export default AboutMe
