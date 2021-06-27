import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    margin: 0 auto;
`;

export const ProjectSubheader = styled.h3`
    font-weight: 600;
    padding-left: 15px;
    padding-bottom: 34px;
    padding-top: ${({topPad}) => 
    topPad === 'top' && '55px'};
`;