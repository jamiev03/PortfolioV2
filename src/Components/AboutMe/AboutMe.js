import React from 'react';
import { AboutMeContainer, AboutMeText } from './AboutMe.style';
import { Button } from '../../Global.style';

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <AboutMeText>
                <h3>Hi I’m Jamie, based out of Waterloo, Canada. I develope and design web experiences that both work and look good. Figuring out how things work has always been something that I enjoy. The internet is so vast and I love how it allows me to learn everyday. Outside of front-end development my interests include hiking, gardening, reading and playing the guitar. </h3>
                <Button>Download CV</Button>
            </AboutMeText>
        </AboutMeContainer>
    )
}

export default AboutMe
