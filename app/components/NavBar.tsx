import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rfsLogo from '../../public/rfs_logo.jpg'

const NavBar = () => {
  return (
    <>
    <div className="flex flex-row items-center w-screen bg-basic-green">
        <div>
        <Image src={rfsLogo} width={50} height={50} alt='Logo' className='rounded-md ml-8'/>
        </div>
      <div>
      <ul className='flex flex-row p-2'>
        <li className='p-4 hover:scale-110 transition-all'><Link href="#home" className='font-bold text-lg'>Welcome</Link></li>
        <li className='p-4 hover:scale-110 transition-all'><Link href="#about" className='text-lg'>About Me</Link></li>
        <li className='p-4 hover:scale-110 transition-all'><Link href="#portfolio" className='text-lg'>Portfolio</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar
