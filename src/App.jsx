import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';

const App = () => {
  return (
    <div className='w-full bg-[#ecf8f8] px-10 py-7'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
