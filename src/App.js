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


{/* 
  DROPDOWN MENU
  <div className=" bg-orange-300 p-10">
    <button className="block h-16 w-16 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
      <img src="../images/profile.jpg" className="h-full w-full object-cover" alt="avatar" />
    </button>
    <div className="w-48 mt-1 py-2 shadow-xl bg-white rounded">
      <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Abous</a>
      <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Experience</a>
      <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Work</a>
      <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Contact</a>
      <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white">Curriculum</a>
    </div>
  </div>
*/}