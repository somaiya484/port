import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import './Work.css'
import { BiLinkExternal, BiCodeAlt, BiServer } from 'react-icons/bi'




const Work = () => {
  return (
    <section className='section mt-16' id='work'>
      <div className="w-3/4 mx-auto">
        <div className='flex flex-col lg:flex-row gap-y-10 gap-x-8'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-gradient'>My Latest <br /> Projects</h2>
              <p className='max-w-sm mb-16'>
                As a junior front-end developer, I have recently completed projects that involved developing responsive and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React and node.js. For backend express.js and MongoDB.
              </p>
            </div>
            {/* image */}
            <div>
              <div className='box box1'>

              </div>
              <div className='flex items-center gap-3'>
                <a href='https://assignment-food-recipes.web.app' target="_blank" className='flex items-center gap-3 text-lg  btn2  rounded  px-2 mt-3'>Live link<BiLinkExternal></BiLinkExternal></a>
                {/* modal */}
                <button className=" border-none px-2 mt-3 btn2 rounded gradient" onClick={() => window.my_modal_5.showModal()}>Desctiption</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <form method="dialog" className="modal-box">
                    {/* body */}
                    <h3 className="font-bold text-lg text-gradient">Name: Cookilious</h3>
                    <p className="py-4">This website is all about Korean food recipes. It will help you to know some Korean food, recipes as well as the necessary ingredients for cooking, the cooking method and cooking tips. From this website one can easily learn Korean foods cooking method and many more things related cooking.</p>
                    <div className='text-[14px] leading-6'>
                      <ul>
                        <li>1. In this website Authentication system added, where one user can login by their google and GitHub account.</li>
                        <li>2. If any user selects any recipes, then it will show user a beautiful toastify message.</li>
                        <li>3. In the mobile or small device this website’s home page, chef details page all is fully responsive</li>
                      </ul>
                    </div>
                    <div className='flex items-center gap-3 '>
                      <a href='https://github.com/somaiya484/chef-client' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Code Link<BiCodeAlt></BiCodeAlt></a>
                      <a href='https://github.com/somaiya484/Korean-Chef-Server' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Server side link <BiServer></BiServer></a>
                    </div>
                    {/* body end */}
                    <div className="modal-action">
                      <button className="border-none px-3 mt-3 btn2 rounded gradient">Close</button>
                    </div>
                  </form>
                </dialog>
                {/* modal end */}

              </div>

            </div>

            <div>
              <div className='box box4'>

              </div>
              <div className='flex items-center gap-3'>
                <a href='https://vermillion-bombolone-f5585c.netlify.app/' target="_blank" className='flex items-center gap-3 text-lg  btn2  rounded  px-2 mt-3'>Live link<BiLinkExternal></BiLinkExternal></a>

                {/* modal */}
                <button className=" border-none px-2 mt-3 btn2 rounded gradient" onClick={() => window.my_modal_2.showModal()}>Desctiption</button>
                <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                  <form method="dialog" className="modal-box">

                    {/* body */}
                    <h3 className="font-bold text-lg text-gradient">Name: Oplor</h3>
                    <p className="py-4">This website is all about about dream jobs. Where have 6 biggest features some job category</p>
                    <div className='text-[14px] leading-6'>
                      <ul>
                        <li>1. On clicking view details button one user can see the description of the feature section</li>
                        <li>2. In Specific feature details page, user can select any job related information</li>
                        <li>3. There is also a Statistics page where Just a regular number Statistics added</li>
                      </ul>
                    </div>
                    <div className='flex items-center gap-3 '>
                      <a href='https://github.com/somaiya484/career' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Code Link<BiCodeAlt></BiCodeAlt></a>
                    </div>
                    {/* body end */}

                    <div className="modal-action">
                      <button className="border-none px-3 mt-3 btn2 rounded gradient">Close</button>
                    </div>
                  </form>
                </dialog>
                {/* modal end*/}

              </div>

            </div>
          </motion.div>



          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex-col gap-y-10'>

           

            <div className='mb-10'>
              <div className='box box3'>

              </div>
              <div className='flex items-center gap-3'>
                <a href='https://toy-store-assign-11.web.app ' target="_blank" className='flex items-center gap-3 text-lg  btn2  rounded  px-2 mt-3'>Live link<BiLinkExternal></BiLinkExternal></a>
                {/* modal */}
                {/* Open the modal using ID.showModal() method */}
                <button className=" border-none px-2 mt-3 btn2 rounded gradient" onClick={() => window.my_modal_4.showModal()}>Desctiption</button>
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                  <form method="dialog" className="modal-box">

                    {/* body */}
                    <h3 className="font-bold text-lg text-gradient">Name: Genius Play </h3>
                    <p className="py-4"> The Website focused on knowledgeable toys. Here user can show toys which helps for knowledge build up. </p>
                    <div className='text-[14px] leading-6'>
                      <ul>
                        <li>1.  There is some protected route, where no one can get access or select anything without Login or Signup</li>
                        <li>2. User can add their toys as they wish. It will post on MongoDB and then this data also showed in website. </li>
                        <li>3. User can see valid message alert, the toys based on category in different tabs and responsive.</li>
                      </ul>
                    </div>
                    <div className='flex items-center gap-3 '>
                      <a href='https://github.com/somaiya484/Toy-client' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Code Link<BiCodeAlt></BiCodeAlt></a>
                      <a href='https://github.com/somaiya484/Toy-Server' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Server side link <BiServer></BiServer></a>
                    </div>
                    {/* body end */}
                    <div className="modal-action">
                      <button className="border-none px-3 mt-3 btn2 rounded gradient">Close</button>
                    </div>
                  </form>
                </dialog>
                {/* modal */}
              </div>
            </div>

            <div className='mb-10'>
              <div className='box box5'>

              </div>
              <div className='flex items-center gap-3'>
                <a href='https://somaiya484.github.io/assignment-3/' target="_blank" className='flex items-center gap-3 text-lg  btn2  rounded  px-2 mt-3'>Live link<BiLinkExternal></BiLinkExternal></a>
                {/* modal */}
                {/* Open the modal using ID.showModal() method */}
                <button className=" border-none px-2 mt-3 btn2 rounded gradient" onClick={() => window.my_modal_1.showModal()}>Desctiption</button>
                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                  <form method="dialog" className="modal-box">

                    {/* body */}
                    <h3 className="font-bold text-lg text-gradient">Name: Justice </h3>
                    <p className="py-4">It is a normal one pages website and this website 97% based on bootstrap. All legal rule regulation related information are in this website.</p>
                    <div className='text-[14px] leading-6'>
                      <ul>
                        <li>1.  There is a slider in testimonial by using bootstrap.</li>
                        <li>2. A FAQ section by using Accordion, Bootstrap</li>
                        <li>3. Navbar, footer, about us, contact setion are also in the page with relevant information. And website is fully responsive</li>
                      </ul>
                    </div>
                    <div className='flex items-center gap-3 '>
                      <a href='https://github.com/somaiya484/legal' target="_blank" className="border-none px-3 mt-3 btn2 text-purple-800 hover:text-white rounded flex items-center gap-3 ">Code Link<BiCodeAlt></BiCodeAlt></a>
                    </div>
                    {/* body end */}

                    <div className="modal-action">
                      <button className="border-none px-3 mt-3 btn2 rounded gradient">Close</button>
                    </div>
                  </form>
                </dialog>
                {/* modal */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
