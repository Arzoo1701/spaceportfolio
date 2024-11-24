'use client'
import React from 'react'
import Image from 'next/image';

import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Full Stack Developer Portfolio</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              hello people!
            </span>
            <br /> {/* Add a line break here */}
            
           I,Arzoo Dahiya.
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.5)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a third-year B.Tech student in CSE-AI at IGDTUW with a CGPA of 9.25. I have a strong foundation in data structures and a keen interest in exploring the field of AI through innovative projects. I am passionate about learning and open to new opportunities to grow and contribute effectively.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
          src="/Space%20Portfolio%20Assets/Untitled design (6).png"
          alt="work icons"
          height={450}
          width={450}
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
