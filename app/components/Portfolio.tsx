import React from 'react';
import RehearsalPreview from '../../public/reheasal-preview.png';
import HonestcouchPreview from '../../public/honestcouch-preview.png'
import Image from 'next/image';
import LinkButton from './LinkButton';

const Portfolio = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 bg-basic-green pt-8 justify-evenly h-min" style={{ minHeight: '500px' }}>
      <div className='flex flex-col'>
      <div className="card bg-base-100 shadow-xl lg:card-side lg:w-full mb-5">
        <div className="card-body p-4 lg:w-1/2 order-2 lg:order-1">
          <h2 className="card-title text-3xl">Rehearsal App</h2>
          <p className='text-xl'>The Rehearsal App is a web app designed to help singers learn their voice. The central point for this is the mixer, with which you can make the individual voices of the practice playbacks louder and quieter using faders, as well as mute or solo them using a button. In addition, the lyrics of the individual songs are synchronized and clickable, so that you can jump to the corresponding position so that you don't always have to search for the right position during rehearsals. This can be very difficult with an instrumental playback without clickable Vocals.</p>
          <div className="card-actions justify-center">
            <a href="http://songs.renja.cc" target='_blank'>
            <button className="btn btn-primary btn-lg text-2xl lg:text-xl">Try it yourself!</button>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative h-48 lg:h-full order-1 lg:order-2">
        <Image src={RehearsalPreview} alt="Album" layout="fill" objectFit="cover" style={{minHeight: "20rem"}} className="rounded-b-lg lg:rounded-none lg:rounded-r-lg" />
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl lg:card-side lg:w-full mb-5">
        <div className="card-body p-4 lg:w-1/2 order-2 lg:order-2">
          <h2 className="card-title text-3xl">honestcouch</h2>
          <p className='text-xl'>Jeden Tag eine Frage beantworten und seine 
                Freunde trotz des schnellebigen Alltags besser kennenlernen.
                Die Social-App „honestcouch“ hilft dabei den 
                Anschluss nicht zu verlieren und auch in stressigen Zeiten spannendes über seine Freunde 
                zu erfahren.
                Jeden Tag kommt eine neue Frage per PushNachricht, die die Nutzer dann beantworten 
                können. Haben sie die Frage beantwortet, sehen sie die Antworten ihrer Freunde.
                Die App ist als Abschlussapp des Bootcamps 
                an der WBS Coding School in React Native mit 
                einem Express Backend erstellt worden und 
                wird derzeit von mir weiterentwickelt. 
                Eine Beta Version ist nach Einladung über den 
                Google Play Store zu beziehen</p>
          <div className="card-actions justify-center">
            <a href="" target='_blank'>
            <button className="btn btn-primary btn-lg text-2xl lg:text-xl">Try it yourself!</button>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative h-48 lg:h-full order-1 lg:order-1">
        <Image src={HonestcouchPreview} alt="Album" layout="fill" objectFit="cover" style={{minHeight: "20rem"}} className="rounded-b-lg lg:rounded-none lg:rounded-l-lg" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio;
