import React from 'react';
import { Link } from 'react-scroll';
import {BsGithub, BsLinkedin, BsDownload} from 'react-icons/bs'
import resume from '../assets/Resume (4).pdf'

const Banner = () => {
  return (
    <div className='section flex-col lg:flex-row justify-evenly items-center mt-12 w-3/4 mx-auto gap-8' id='home'>
      <div className='flex lg:flex-col  gap-3'>
        <a href='https://github.com/somaiya484' target='_blank'><BsGithub></BsGithub></a>
        <a href='https://www.linkedin.com/in/somaiya-shahin/'  target='_blank'><BsLinkedin></BsLinkedin></a>
      </div>
      <div className='text-center'>
        <p className='mb-2'>Hello! I'm</p>
        <h1 className='text-5xl font-semibold mb-2'>Somaiya Shahin</h1>
        <p className='mb-10 text-gradient' >Front-end Developer</p>
        <div className='flex flex-col lg:flex-row  justify-center gap-3'>
          <a href={resume} download='resume'  className='btn2 rounded px-2 py-1 flex justify-center gradient  items-center gap-2 cursor-pointer'
          ><BsDownload></BsDownload> Resume</a>
          <button className='btn2 px-2 py-1 rounded cursor-pointer ' 
          activeClass='active'
          smooth={true}
          to='contact'
          >Let's Talk</button>
        </div>
      </div>
      {/* hello */}
      {/* let's talk now */}
      <div>
        scroll down 
      </div>
    </div>
  );
};

export default Banner;
