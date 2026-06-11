import React from 'react';
import portrait from '../assets/profile-pic-modified.png';

const experience = [
  { company: 'Stripe', role: 'Software Engineer', date: 'Starting Aug 2026', location: 'San Francisco, CA' },
  { company: 'Capital One', role: 'Software Engineering Intern', date: 'Jun – Aug 2025', location: 'New York City, NY' },
  { company: 'Honeywell', role: 'Software Engineering Intern', date: 'Jun 2023 – Aug 2024', location: 'Kansas City, MO' },
];

export default function Home() {
  return (
    <>
      <div className="home-top">
        <div className="home-bio">
          <p>
            I'm Dhruv Raval. I grew up in Illinois, graduated from UIUC and currently work at Stripe in SF. This is my personal site, where I share professional updates and things I find interesting.
          </p>
          <div className="home-links">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
            <a href="https://github.com/dhruvkraval" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://www.linkedin.com/in/dhruv-raval-/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
          <p style={{ marginTop: '12px' }}>email: <strong>contact [at] dhruvraval [dot] com</strong></p>
        </div>
        <div className="home-photo">
          <img src={portrait} alt="Dhruv Raval" />
        </div>
      </div>

      <p className="section-label">Experience</p>
      <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
        {experience.map((e, i) => (
          <li key={i} style={{ marginBottom: '5px', color: '#333' }}>
            <strong>{e.company}</strong>
            <span style={{ color: '#999' }}> — {e.role}</span>
            <br />
            <span style={{ color: '#bbb', fontSize: '12px' }}>{e.date}</span>
          </li>
        ))}
      </ul>

      <p className="section-label" style={{ marginTop: '24px' }}>Things About Me</p>
      <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
        <li style={{ marginBottom: '4px', color: '#333' }}>My technical interests lie in systems; I enjoy systems and infra work.</li>
        <li style={{ marginBottom: '4px', color: '#333' }}>I am a proud Illinois alum! Hail to the <span style={{ color: '#e84a27', fontWeight: 600 }}>Orange</span>!</li>
        <li style={{ marginBottom: '4px', color: '#333' }}>I love sports! I do production work on a sports podcast called <a href="https://www.youtube.com/@raw__room" target="_blank" rel="noopener noreferrer">Raw Room</a> and love football and basketball.</li>
        <li style={{ marginBottom: '4px', color: '#333' }}>I started my college career at Iowa State. Still a big fan of Cyclone Athletics!</li>
        <li style={{ marginBottom: '4px', color: '#333' }}>Currently, I am trying to learn about psychology and history. I will post <a href="/books">books</a> and <a href="/research">research</a> here when I find anything good.</li>
        <li style={{ marginBottom: '4px', color: '#333' }}>I want to get better at photography.</li>
      </ul>
    </>
  );
}
