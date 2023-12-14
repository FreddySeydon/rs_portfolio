import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import rfsLogo from '../../public/rfs_logo.jpg'

const NavBar = () => {
  return (
    <>
    <div className="flex flex-row items-center">
        <div>
        <Image src={rfsLogo} width={50} height={50} alt='Logo' className='rounded-md'/>
        </div>
      <div>
      <ul className='flex flex-row p-2'>
        <li className='p-4'><Link href="#home">Welcome</Link></li>
        <li className='p-4'><Link href="#about">About Me</Link></li>
        <li className='p-4'><Link href="#portfolio">Portfolio</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar
