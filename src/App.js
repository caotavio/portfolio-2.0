import React from 'react';
import './App.css';
import './tailwind.generated.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTopButton from './components/icons/ScrollTopButton';

function App() {

  return (
    <div>
      <Navbar />

      <main className="px-6 flex-grow text-gray-500">
        <LandingPage />

        <About />

        <Skills />

        <FeaturedProjects />
        
        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
