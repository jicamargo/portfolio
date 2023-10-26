import React from 'react';
import './css/App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import RecentWorks from './components/RecentWorks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <RecentWorks />
    </div>
  );
}

export default App;
