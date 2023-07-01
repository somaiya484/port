import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BiSolidBriefcase, BiSolidBarChartSquare, BiSolidContact, BiSolidChat } from 'react-icons/bi'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='home' c
            lassName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt></BiHomeAlt>
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='about'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser></BiUser>
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='skills'
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiSolidBarChartSquare></BiSolidBarChartSquare>
          </Link>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='work' c
            lassName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiSolidBriefcase></BiSolidBriefcase>
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            activeClass='active'
            smooth={true}
            spy={true}
            to='contact'>
            <BiSolidChat></BiSolidChat>
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
