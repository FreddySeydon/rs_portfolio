"use client"
import React from 'react'
import Link from 'next/link'

const LinkButton = () => {
  return (
    <div>
        <Link href={"songs.renja.cc"}>
      <button className="btn btn-primary">Try it yourself!</button>
      </Link>
    </div>
  )
}

export default LinkButton
