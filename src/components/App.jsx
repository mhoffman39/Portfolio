import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About/About';
import Projects from './Projects/Projects';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, contactData, footerData } from '../data/data';

const App = () => {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
    </PortfolioProvider>
  );
};

export default App;