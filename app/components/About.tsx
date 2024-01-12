"use client"

import React from 'react'
import calculateAge from '@/utils'
import styles from './About.module.css'
import { ExpressIcon, ReactIcon, JavaScriptIcon, NextjsIcon, CssIcon, FirebaseIcon, GitHubIcon, GitIcon, HtmlIcon, IllustratorIcon, MongoIcon, PhotoshopIcon, PostgresIcon, PythonIcon, PremiereIcon, SassIcon, SlackIcon, SqlilteIcon, TailwindIcon, TrelloIcon, TypeScriptIcon, VsCodeIcon, WebStormIcon, XdIcon, ReactNativeIcon } from './Icons'
import Skill from './Skill'

const About = () => {

  const skillIcons = [
    <JavaScriptIcon />,
    <ReactIcon />,
    <NextjsIcon />,
    <ExpressIcon />,
    <CssIcon />,
    <FirebaseIcon />,
    <GitHubIcon />,
    <GitIcon />,
    <HtmlIcon />,
    <IllustratorIcon />,
    <MongoIcon />,
    <PhotoshopIcon />,
    <PostgresIcon />,
    <PythonIcon />,
    <PremiereIcon />,
    <SassIcon />,
    <SlackIcon />,
    <SqlilteIcon />,
    <TailwindIcon />,
    <TrelloIcon />,
    <TypeScriptIcon />,
    <VsCodeIcon />,
    <WebStormIcon />,
    <XdIcon />,
    <ReactNativeIcon />
];


  return (
    <div className='flex flex-col w-full lg:flex-row p-5'>
      <div className='w-1/3 rounded-box bg-cyan-100 pl-5 pr-5 drop-shadow-sm'>
        <div className='collapse-title text-xl font-medium'>
        <h2 className='text-3xl text-center font-bold mb-2'>Key Data</h2>
        </div>
        <div>

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
        <div className='grid grid-cols-4 gap-2'>
        {skillIcons.map((IconComponent, index) => (
        <Skill IconComponent={IconComponent} key={index} index={index} />
        ))}
        </div>

        <div>
        </div>
      </div>


    </div>
  )
}

export default About
