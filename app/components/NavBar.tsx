import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rfsLogo from '../../public/rfs_logo.jpg'

const NavBar = () => {
  return (
    <>
    <div className="flex flex-row items-center w-screen bg-basic-green mt-0">
        <div>
        <Image src={rfsLogo} width={50} height={50} alt='Logo' className='rounded-md ml-8'/>
        </div>
      <div>
      <ul className='flex flex-row p-2'>
      <a href="#home" className='font-bold text-lg'><li className='p-4 hover:scale-110 transition-all'>Welcome</li></a>
      <a href="#about" className='text-lg'><li className='p-4 hover:scale-110 transition-all'>About Me</li></a>
      <a href="#portfolio" className='text-lg'><li className='p-4 hover:scale-110 transition-all'>Portfolio</li></a>
      </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar
