import "./CSS/aboutme.css";
import {Document} from 'react-pdf';


function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="hellomynameisbig-box">
        <h3 className="aboutme-title">HELLO MY NAME IS</h3>
        <div className="hellomynameissmall-box">
          <div className="aboutme-content">
            <img src="/photoofme.jpg" alt="Me" className="aboutme-photo" />
            <p className="aboutme-description">
                Mariia Kuratchenko<br/><br/>

                I’m a Game Programming student at Centennial College and a passionate Game Developer.  <br/>
                <br/>I enjoy both the creative and technical sides of game development — from designing 3D assets and animations in Blender to programming gameplay systems in Unity and Unreal with C# and C++.  
                <br/>Multilingual in English, Ukrainian, and Russian, with an ability to explain technical ideas quickly and effectively to diverse audiences.
            </p>
          </div>
        </div>
      </div>
            <a 
                href="/MariiaKuratchenkoResume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-link"
        >
        📄 View My Resume
        </a>
    </div>
  );
}

export default AboutMe;

