import React from 'react'
import calculateAge from '@/utils'
import styles from './About.module.css'
import {ReactIcon} from './Icons'

const About = () => {

    const skills = [ReactIcon];

  return (
    <div className='flex flex-col w-full lg:flex-row p-5'>
      <div tabIndex={0} className='collapse collapse-arrow bg-base-200 w-1/3 rounded-box bg-slate-100'>
        <input type="checkbox" />
        <div className='collapse-title text-xl font-medium'>
        <h1 className='font-bold text-large'>Click here for key data</h1>
        </div>
        <div className='collapse-content'>

        <table>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Name</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>Renja Ferry Schmakeit</h3></td>
            </tr>
            <tr>
                <td><h3 className='text-large font-bold text-accent-blue'>Age</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>{calculateAge(761875200)}</h3></td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>E-Mail</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>it@renja.cc</h3></td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Pronouns</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>he/him</h3></td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Degree</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>MA Design & Media</h3></td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Qualification</h3></td>
                <td><h3 className='text-xl font-bold text-accent-blue'>Web- & App-Development Bootcamp at WBS Coding School</h3></td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Social</h3></td>
                <td className='flex gap-2'>
                    <div><h3 className='text-xl font-bold text-accent-blue'>LinkedIn</h3></div>
                    <div><h3 className='text-xl font-bold text-accent-blue'>Insta</h3></div>
                    <div><h3 className='text-xl font-bold text-accent-blue'>Facebook</h3></div>
                </td>
            </tr>
            <tr>
            <td><h3 className='text-large font-bold text-accent-blue'>Motto</h3></td>
            <td><h3 className='text-xl font-bold text-accent-blue'>One Way or Another</h3></td>
                
            </tr>
        </table>
        </div>
      </div>
      <div className='divider divider-horizontal divider-primary'></div>
      <div className='w-1/3 rounded-box bg-cyan-100 p-5 drop-shadow-sm'>
        <h2 className='text-3xl text-center font-bold mb-5'>Short description</h2>
        <h3 className='text-2xl font-bold text-center mb-5 text-accent-blue'>I studied Design & Media in Hannover and worked in the media industry for 10 years in various positions on set and in the production office as well as in post production. The skillset I acquired during that time comes in handy a lot on my new journey to becoming an excellent coder.</h3>        
      </div>
      <div className='divider divider-horizontal divider-primary'></div>
      <div className='w-1/3 rounded-box bg-cyan-100 p-5 drop-shadow-sm'>
        <h2 className='text-3xl text-center font-bold mb-5'>Skills</h2>
        <div>
        </div>
      </div>


    </div>
  )
}

export default About
