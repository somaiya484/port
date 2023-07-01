import React from 'react';
import { BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoMongodb, BiLogoFirebase, BiZoomIn } from 'react-icons/bi'
import { FaNodeJs, } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Skills = () => {

    return (
        <section className=' relative' id='skills'>
            <div className='mt-8 text-center'>
                <h3 className=' text-gradient  font-semibold text-4xl'>
                    My Skills
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>My technical Knowledge</p>
                <div className='flex items-center justify-center mt-12 gap-10 flex-wrap container mx-auto'>
                    <motion.div
                        variants={fadeIn('bottom', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex items-center justify-center mt-12 gap-10 flex-wrap container mx-auto'>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 85%, #ddd 85%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoHtml5></BiLogoHtml5>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>85%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 75%, #ddd 75%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoCss3></BiLogoCss3>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>75%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 95%, #ddd 95%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoBootstrap></BiLogoBootstrap>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>95%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 85%, #ddd 85%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoTailwindCss></BiLogoTailwindCss>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>85%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 70%, #ddd 70%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoJavascript></BiLogoJavascript>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>70%</p>
                        </div>

                    </motion.div>

                    <motion.div
                        variants={fadeIn('bottom', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex items-center justify-center mt-12 gap-10 flex-wrap container mx-auto'>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 66%, #ddd 66%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoReact></BiLogoReact>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>65%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 40%, #ddd 40%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <FaNodeJs></FaNodeJs>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>40%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 80%, #ddd 80%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoFirebase></BiLogoFirebase>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>80%</p>
                        </div>

                        <div className='border-2 border-purple-600 relative  bg-gray-900 px-7 py-7  rounded-xl'>
                            <div
                                style={{
                                    background: `conic-gradient(rgb(97, 8, 170) 50%, #ddd 50%)`
                                }}
                                className='w-32  h-32 flex items-center justify-center rounded-full'
                            >
                                <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                    <BiLogoMongodb></BiLogoMongodb>
                                </div>
                            </div>
                            <p className='text-xl mt-3'>50%</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Skills;