import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <div className='bg-no-repeat bg-cover overflow-hidden bg-[url("./assets/bg.jpg")] '>
      <Header></Header>
      <Banner>
      </Banner>
      <Nav></Nav>
      <About></About>
      {/* <About></About> */}
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <div className='h-auto mb-40'></div>
    </div>
  );
};

export default App;