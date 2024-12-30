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
        dateRange: 'June 2024 — August 2024',
        description: `Spearheaded multiple company-first projects including the development of a RAG LLM chatbot for internal documentation and the creation of a secure data pipeline API from Apache HDFS.`,
        skills: ['Python', '.NET', 'RESTful API', 'Apache HDFS', 'RAG'],
      },
      {
        title: 'Software Engineering Intern II',
        dateRange: 'June 2023 — June 2024',
        description: `Automated a process by developing the backend and middleware for an internal software product, reducing engineer data retreival time by upwards of 90%. `,
        skills: ['.NET', 'RESTful API', 'Apache HDFS'],
      },
    ],
  },
  {
    company: 'Disruption Lab at Gies',
    positions: [
      {
        title: 'Director',
        dateRange: 'Dec 2024 - Present',
        description: `Managing over 100 student SWEs across 12+ technical projects.`,
        skills: ['Blockchain', 'VR', 'AI', 'Leadership'],
      },
      {
        title: 'Head of Technology',
        dateRange: 'June 2024 - Dec 2024',
        description: `Led technical development for 3 projects spanning AI, VR, and blockchain for clients including the State of Illinois and AMD while managing 25+ software engineers.`,
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
    description: 'In my freshman year of high school (2018), I founded a subscription sneaker business that reached $275,000 in revenue, had 1770+ paid users, and over 50k Instagram followers. I sold the company in 2021.',
  },
  {
    title: 'Safety Scan',
    description: 'I worked with a team to create an MVP computer vision object recognition model that tracked safety equipment usage in manufacturing environments. The project raised $21,000 in non-dilutive funding.',
  },
  {
    title: 'Iowa State Hackathon Project',
    description: 'My friends and I made an AI learning app for the HackIowaState Hackathon and won 2nd place out of 50 teams. We used Node.js and implemented the OpenAI API and a depth-first search algorithm to create learning maps and summarized video notes.',
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
              <p>CS + Economics @ <span className="orange-text">University of Illinois at Urbana-Champaign</span></p>
              <div className="social-icons">
                <a href="mailto:contact@dhruvraval.com">
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
          <div class="intro-text">
            <p>Hey! I'm Dhruv.</p>
            <br></br>
            <p>
              I'm a <strong>Computer Science + Economics</strong> student at UIUC with a 4.0 GPA, graduating in <strong>May 2025</strong> with an intention to pursue a Masters in Computer Science.
            </p>
            <br></br>
            <p>
            I'm passionate about AI and full stack development, and I love opportunities to work on innovative and impactful projects.
            </p>
            <br></br>
            <p>Previously, I worked as an intern for <a href="https://kcnsc.doe.gov/" target="_blank" rel="noopener noreferrer">Honeywell</a>, where I supported Nuclear Weapons Programs and worked on digitization and AI projects.</p>
            <br></br>
            <p>I also bring experience delivering multiple AI solutions to clients from my time in <a href="https://giesgroups.illinois.edu/disruptionlab/home-v2/" target="_blank" rel="noopener noreferrer">Disruption Lab</a>, where I have risen to Director and now <strong>lead over 100 software engineers</strong> across 12 different projects.</p>
            <br></br>
            Take a look at my full resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>. Send me an email @ <a href="mailto:contact@dhruvraval.com">contact@dhruvraval.com</a>.
          </div>
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
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} />
            ))}
          </div>
          <hr></hr>
          <div className="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me by email @ <a href="mailto:contact@dhruvraval.com">contact@dhruvraval.com</a> or connect with me on <a href="https://www.linkedin.com/in/dhruv-raval-/">LinkedIn.</a></p>
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