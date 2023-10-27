import React from 'react';
import './css/App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import RecentWorks from './components/RecentWorks';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <RecentWorks />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
