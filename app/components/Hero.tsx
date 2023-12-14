import React from 'react'
import Image from 'next/image'
import mugshot from "../../public/rs_mugshot.jpg"
import styles from './Hero.module.css'

function Hero() {
  return (
    <>
    <div className='flex flex-row'>

    
    <div className='w-1/3 flex flex-col'>
      <Image src={mugshot} width={300} height={300} alt='Renja Schmakeit Mugshot' className='rounded-xl, w-full'/>
      <h1 className={styles.title}>Renja Ferry Schmakeit</h1>
      <h3 className={styles.subtitle}>Junior Web- and App-Developer</h3>
    </div>
    <div>
      <h3>Former Media Allrounder transforming to a passionate Web- and App-Developer</h3>
      <div>
        {/* <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" width={500} height={500} alt='Renja Schmakeit Mugshot'/> */}
      </div>
    </div>
    </div>

    
    </>

  )
}

export default Hero
