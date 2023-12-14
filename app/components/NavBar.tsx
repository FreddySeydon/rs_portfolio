import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
        <div>
        <Image src="" width={500} height={500} alt='Logo'/>
        </div>
      <ul>
        <li>Welcome</li>
        <li>About Me</li>
        <li>Portfolio</li>
      </ul>
    </div>
  )
}

export default NavBar
