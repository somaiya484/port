import React from 'react';
import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

// import { motion, useInView } from 'framer-motion'
import { fadeIn } from '../variants'
import img from '../assets/photo_2023-06-30_15-58-56.jpg'

const About = () => {
//   const [ref] = useInView({
//     threshold: 0.5,
//   });
  return (
    <section id='about mt-10' className='section'>
      <div className="px-3 lg:px-10">
        <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-2 m-auto'>

          <img 
          data-aos="fade-right"
        data-aos-offset="300"
             data-aos-easing="ease-in-sine"
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            src={img}
            className='flex-1 bg--contain bg-no-repeat h-[540px] w-[350px] mx-auto mix-blend-lighten bg-top rounded'>
          </img>

          <div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='w-[550px] mt-7'>
            <h2 className='h3'>About Myself</h2>
            <h3 className='h2 text-gradient my-5 normal-case'>
              I'm passionate about creating user-friendly web experiences
            </h3>
            <p className='mb-5 text-base leading-6'>As a junior front-end developer, I am dedicated to crafting exceptional digital experiences. With a strong command of HTML, CSS, and JavaScript, I strive to create visually stunning and user-friendly websites. I have a keen eye for detail and a passion for solving complex problems. By staying updated with the latest industry trends and collaborating with cross-functional teams, I aim to deliver innovative and impactful solutions that meet the unique needs of each client. I am driven by a commitment to excellence and constantly seek opportunities to grow and refine my skills.</p>

            <div className='flex gap-10 mb-8 '>
              <div>
                <div className='text-[40px] font-tertiary mr-8 text-gradient mb-2'>

                    <CountUp start={0} end={50} duration={3}></CountUp> :
                    null
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Basic <br /> Problem Solving
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                      <CountUp start={0} end={15} duration={3}></CountUp> :
                      null

                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Completed <br /> Projects
                </div>
              </div>
            </div>

            <div>
              <button className='btn2 rounded px-10 gradient py-1'>Hire Me</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


// <div className='grid grid-cols-1 3 md:grid-cols-2 lg:grid-cols-2 w-3/4 m-auto'>
// <div data-aos="fade-right"
//     data-aos-offset="300"
//     data-aos-easing="ease-in-sine">
//     <img className='rounded' src={about} alt="" />
// </div>
// <div data-aos="fade-left"
//     data-aos-offset="300"
//     data-aos-easing="ease-in-sine" className='w-full'>
//     <p className='text-base align-middle mt-3 font-medium'>
//         At GeniusPlay, we believe that education can be exciting and enjoyable, and our carefully curated collection of toys reflects that belief. We have sourced a wide range of educational toys from trusted manufacturers who prioritize quality, safety, and educational value. From puzzles and building blocks to science kits and coding games, our selection covers various subjects and skills, ensuring there is something for every childs interests and learning style.Thank you for choosing GeniusPlay as your go-to destination for educational and learning toys.
//     </p>
// </div>
// </div>
