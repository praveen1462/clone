import React from 'react';
import './App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Contents</h2>
      <ul>
        <li>Introduction</li>
        <li>1. Introduction to Microservices</li>
        <li>2. Hands on: Creating Microservices with ASP.net Core</li>
        <li>3. Hands on: Synchronous Communication between Microservices</li>
        <li>4. Microservices and DevOps</li>
        <li>5. Microservices Containerization with Docker</li>
        <li>6. Microservices Deployment</li>
        <li>Conclusion</li>
      </ul>
    </div>
  );
}

const Content = () => {
  return (
    <div className="content">
      <div className="header">
        <h1>ASP Microservices with .NET Core for Developers</h1>
        <button>Leave a review</button>
      </div>
      <div className="video">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/QNOlOhDdCPg" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div className="instructor">
        <h2>Instructor</h2>
        <p>Rodrigo Diaz</p>
        <p>Solution Architect, Lorem, Ipsum, Engineer</p>
        <p>Analyst, Programmer, Worker</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
