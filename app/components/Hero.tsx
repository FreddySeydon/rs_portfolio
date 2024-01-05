import React from 'react'
import Image from 'next/image'
import mugshot from "../../public/rs_mugshot.jpg"
import styles from './Hero.module.css'
import {ExpressIcon, NextjsIcon, ReactIcon, JavaScriptIcon} from './Icons';

function Hero() {
  return (
    <>
    <div className='section'>
    <div className='flex flex-row'>

    
    <div className='w-1/3 flex flex-col m-20 p-2 hover:scale-110 transition-all cursor-pointer drop-shadow-md'>
      <Image src={mugshot} width={300} height={300} alt='Renja Schmakeit Mugshot' className='rounded-t-xl w-full drop-shadow-md'/>
      <div className='bg-basic-green'>
      <h1 className={styles.title}>Renja Ferry Schmakeit</h1>
      <h3 className={styles.subtitle}>Junior Web- and App-Developer</h3>
      </div>
    </div>
    <div className='flex flex-col justify-center content-center w-1/3'>
      <h3 className='text-3xl text-center font-bold mb-5 text-accent-blue'>Former Media Allrounder transforming into a passionate Web- and App-Developer</h3>
      <div className='flex flex-row p-1 m-2 content-center justify-center '>
        <JavaScriptIcon className='mr-2 ml-2 rounded-md bg-slate-100 p-1 origin-center hover:-rotate-12 cursor-pointer transition-all drop-shadow-md'/>
        <ReactIcon className='mr-2 ml-2 rounded-md bg-slate-100 p-1 hover:rotate-12 cursor-pointer transition-all drop-shadow-md'/>
        <NextjsIcon className='mr-2 ml-2 rounded-md bg-slate-100 p-1 hover:-rotate-12 cursor-pointer transition-all drop-shadow-md'/>
        <ExpressIcon className='mr-2 ml-2 rounded-md bg-slate-100 p-1 hover:rotate-12 cursor-pointer transition-all drop-shadow-md'/>
      </div>
      <div className='flex flex-col mt-10'>
        <div className='btn btn-lg btn-accent mb-2 text-white'>Go to my Portfolio</div>
        <div className='btn btn-lg btn-neutral '>Get to know me</div>
      </div>
    </div>
    </div>
    </div>
    
    </>

  )
}

export default Hero
