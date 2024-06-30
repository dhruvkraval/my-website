import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import portrait from './assets/profile-pic-modified.png'; // Adjust the path as needed
import DropdownCard from './DropdownCard'; // Import the new component


const experiences = [
  {
    company: 'Honeywell',
    positions: [
      {
        title: 'Software Engineering Intern III',
        dateRange: 'June 2024 — Present',
        description: `Pioneered the company’s first Retrieval Augmented Generation (RAG) LLM efforts by fine-tuning a locally-hosted Llama-2 model.`,
        skills: ['Python', '.NET', 'RESTful API', 'Apache HDFS', 'RAG'],
      },
      {
        title: 'Software Engineering Intern II',
        dateRange: 'June 2023 — June 2024',
        description: `Pioneered the company’s first Retrieval Augmented Generation (RAG) LLM efforts by fine-tuning a locally-hosted Llama-2 model.`,
        skills: ['.NET', 'RESTful API', 'Apache HDFS'],
      },
    ],
  },
  {
    company: 'Disruption Lab at Gies',
    positions: [
      {
        title: 'Head of Technology',
        dateRange: 'June 2024 - Present',
        description: `Lead technical development for 10+ projects spanning AI, VR, and blockchain for clients including AMD while managing 100+ software engineers.`,
        skills: ['Blockchain', 'VR', 'AI'],
      },
      {
        title: 'Technical Lead',
        dateRange: 'January 2024 — May 2024',
        description: `Managed a team of 6 software engineers and architected a full-stack AI resume management system for the University of Illinois.`,
        skills: ['Python', 'RAG', 'OpenAI', 'NLTK', 'Semantic Similarity Search'],
      },
      {
        title: 'Software Engineer',
        dateRange: 'August 2023 — January 2024',
        description: `Delivered a full-stack internal documentation chatbot to a client by creating a Retreival Augmented Generation (RAG) model with Langchain and OpenAI.`,
        skills: ['Python', 'RAG', 'OpenAI', 'Langchain', 'API'],
      }
    ],
  },
  // Add more experiences as needed
];

const projects = [
  {
    title: 'Polar Chefs',
    description: 'In my freshman year of high school (2018), I founded a subscription sneaker business that reached $250,000 in revenue, had 1770+ paid users, and over 50k Instagram followers at time of sale. I sold that company in 2021.',
  },
  {
    title: 'Safety Scan',
    description: 'Created an OpenCV computer vision object recognition model tracking safety equipment usage in manufacturing environments that raise $21,000 in non-dilutive funding.',
  },
  {
    title: 'Iowa State Hackathon Project',
    description: 'Utilized Node.js and implemented the OpenAI API and a depth-first search algorithm to create learning maps and summarized video notes. Won 2nd place out of 50 contestants.',
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="profile">
            <div className="profile-text">
              <h1>Dhruv Raval</h1>
              <p>CS + Economics @ University of Illinois at Urbana-Champaign test</p>
              <div className="social-icons">
                <a href="mailto:example@example.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/dhruvkraval" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-raval-/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img src={portrait} alt="Self Portrait" className="profile-picture" />
          </div>
          <p>Hello!</p>
          <br></br>
          <p>
            My name is Dhruv, and I'm a Computer Science + Economics student at UIUC with a 4.0 GPA, graduating in May 2025 with an intention to pursue a Masters in Computer Science.
          </p>
          <br></br>
          <p>
            I'm passionate about AI and have experience with full-stack development professionally, where I work at Honeywell and academically, where I am the Head of Technology and lead 100+ SWEs at the Gies College of Business' Disruption Lab.
          </p>
          <br></br>
          <p>I'm excited for any opportunities to grow professionally and apply my technical skills. Please reach out with any opportunities!</p>
          <br></br>
          <p>Take a look at my full resume here. Send me an email here.</p>
          <br></br>
          <hr></hr>
          <div className="experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
              <DropdownCard key={index} title={exp.company}>
                <ExperienceCard company={exp.company} positions={exp.positions} />
              </DropdownCard>
            ))}
          </div>
          <hr></hr>
          <div className="projects">
            <h2>Projects</h2>
            <br></br>
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} />
            ))}
          </div>
          <hr></hr>
          <div className="contact">
            <p>Contact me pls</p>
          </div>
        </div>
        
      </header>
      <footer className="footer">
        <p>Created with React by Dhruv Raval. 2024.</p>
      </footer>
    </div>
  );
}

export default App;