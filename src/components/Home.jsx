import './CSS/home.css';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="home-container">
            <h3 className="home-title">Hi, I'm Mariia Kuratchenko👋</h3>
            <p className="home-description">Welcome to my Portfolio!</p>
            <p className="home-description">My mission is to create engaging, fun, and visually appealing games that blend creativity with strong technical foundations. Whether it's assets, mechanics, or storytelling — I bring both art and code together.</p>
            
            <div className="highlights-section">
                <div className="info-grid">
                    <div className="highlights-box">
                        <h3 className="highlights-title">What I do</h3>
                        <p className="highlight-item">⚡ Game Programming (Unity, C#, Pyton)</p>
                        <p className="highlight-item">🎨 3D Assets & Animation (Blender, UV Mapping, Rigging)</p>
                        <p className="highlight-item">🕹️ Gameplay Design & Mechanics</p>
                    </div>
                    
                    <div className="highlights-box">
                        <h3 className="highlights-title">Check more!</h3>
                        <p className="highlight-item"><Link to="/aboutme">✨ Information About Me</Link></p>
                        <p className="highlight-item"><Link to="/projects">✨ Projects I Worked On</Link></p>
                        <p className="highlight-item"><Link to="/services">✨ Services That I Offer</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;