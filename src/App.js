import Navbar from "./Components/Navbar/Navbar";
import Avatar from "./Components/Avatar/Avatar";
import {HeroMain} from './Components/HeroContainer/HeroContainer.style';
import { ContentContainer, ContentHeader } from "./Components/ContentContainer/ContentContainer.style";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import SkillSet from "./Components/SkillSet/SkillSet";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import GlobalStyle from './Global.style';
import ContentHeaderImg from './assets/contentHeader.png';

function App() {
  return (
    <>
    <GlobalStyle/>
    <HeroMain>
      <Navbar />
      <Avatar/>
    </HeroMain>
    <ContentContainer>
      <ContentHeader id='about'>
        <img src={ContentHeaderImg} alt='grid'/>
        <h1>About me</h1>
      </ContentHeader>
      <AboutMe/>
      <ContentHeader id='projects'>
        <img src={ContentHeaderImg} alt='grid'/>
        <h1>Projects</h1>
      </ContentHeader>
      <Projects/>
      <ContentHeader id='skillset'>
        <img src={ContentHeaderImg} alt='grid'/>
        <h1>SkillSet</h1>
      </ContentHeader>
      <SkillSet/>
      <ContentHeader id='contact'>
        <img src={ContentHeaderImg} alt='grid'/>
        <h1>Get In Touch</h1>
      </ContentHeader>
      <Contact/>
      <Footer/>
    </ContentContainer>
    </>
  );
}

export default App;
