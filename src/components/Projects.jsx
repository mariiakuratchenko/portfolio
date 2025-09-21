import React from 'react';
import './CSS/projects.css';

// Project images from public folder
const photo1 = '/project1/ChasingLuck1.png'
const photo2 = '/project1/ChasingLuck2.png'
const photo3 = '/project1/ChasingLuck3.png'
const photo4 = '/project1/ChasingLuck4.png'

const photo5 = '/project2/MajesticHomes1.png'
const photo6 = '/project2/MajesticHomes2.png'
const photo7 = '/project2/MajesticHomes3.png'
const photo8 = '/project2/MajesticHomes4.png'

const photo9 = '/project3/GameAssets1.png'
const photo10 = '/project3/GameAssets2.png'
const photo11 = '/project3/GameAssets3.png'
const photo12 = '/project3/GameAssets4.png'
const photo13 = '/project3/GameAssets5.png'

const projectsData = [
    {
        id: 1,
        title: "Chasing Luck",
        description: "It's a 2D side-scrolling game in beat 'em up style, played from a side-view perspective. The player controls a character as they navigate through couple of levels, fighting enemies and boss in the end. The game features combo attacks and special abilities, while players can move only right and left. Developed by me as a first solo game project.",
        images: [photo1, photo2, photo3, photo4],
        captions: ["Game Menu", "Level 1", "Combat System", "Boss Battle"]
    },
    {
        id: 2,
        title: "Majestic Homes",
        description: "A sleek and responsive HTML/CSS website designed for a modern real estate agency. Built by me with contemporary web technologies and clean design principles, it helps users discover their perfect flat by tailoring search options to match their unique lifestyle and accommodations.",
        images: [photo5, photo6, photo7, photo8],
        captions: ["Homepage", "Property Gallery", "Virtual Tour", "Contact Form"]
    },
    {
        id: 3,
        title: "Game Assets Collection",
        description: "Co-developed a comprehensive collection of game development assets, including 3D character models built with Blender, animations, and UV mapping.",
        images: [photo9, photo10, photo11, photo12, photo13],
        captions: ["Character Sprites", "Environment Art", "UI Elements", "Sound Effects", "Animation Frames"]
    }
];

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-grid">
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={project.captions[index]}
                        className="project-image"
                    />
                ))}
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="projects-container">
            <h3>My Projects</h3>
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default Projects;