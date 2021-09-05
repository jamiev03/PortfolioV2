import React from 'react';
import { AboutMeContainer, AboutMeText } from './AboutMe.style';
import { Button } from '../../Global.style';

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <AboutMeText>
                <h3>Hi I’m Jamie, based out of Waterloo, Canada. I develope and design web experiences that both function and look good. Figuring out how things work(or why they don't...) has always been something that I enjoy. The internet is so vast and I love how it allows me to learn and be creative everyday. </h3>
                <Button>Download CV</Button>
            </AboutMeText>
        </AboutMeContainer>
    )
}

export default AboutMe
