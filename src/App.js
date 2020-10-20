import React, {useState,useEffect} from 'react';
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

  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

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
