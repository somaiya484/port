import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { SiMinutemailer } from 'react-icons/si'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
// this is contact
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4jvsqun',
      'template_n5hl36v',
      form.current,
      'nP2zZ2IzKfl5wwwas'
    )
      .then(
        (result) => {
            Swal.fire('Message send');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className='mt-5' id='contact'>
      <div className='w-3/4 mx-auto'>
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center bg-[#330a4c38] rounded p-5 '
          >
            <div>
              <h2 className='text-[45px] lg:text-[80px] leading-none mb-5 text-gradient'>
                Let's Work  <br /> Together
              </h2>
              <h4 className='text-lg flex gap-2 items-center font-medium mb-2'>Email<SiMinutemailer></SiMinutemailer></h4>
              <h4 className='text-base items-center font-medium mb-2'>somaiyashahin484@gmail.com</h4>


            </div>
          </motion.div>


          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-center'
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your Name'
              name='name'
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="email"
              placeholder=' Email'
              name='user_email'
            />

            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              type="text"
              placeholder='Message'
              name='message'
            />
            <input className='btn2 rounded px-8 gradient py-1' type="submit" value='Send' />
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
