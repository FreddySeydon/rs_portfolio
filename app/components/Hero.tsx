import React from "react";
import Image from "next/image";
import mugshot from "../../public/rs_mugshot.jpg";
import styles from "./Hero.module.css";
import { ExpressIcon, NextjsIcon, ReactIcon, JavaScriptIcon } from "./Icons";

function Hero() {
  return (
    <>
      <div className="section lg:mt-10 lg:mb-10 text-basic-g">
        <div className="flex flex-col items-center justify-evenly lg:flex-row w-full">
          <div className="w-50 lg:w-1/3 flex flex-col p-2 hover:scale-110 transition-all drop-shadow-md sm:pb-7 mt-5 lg:mt-0">
            <Image
              src={mugshot}
              alt="Renja Schmakeit Mugshot"
              className="rounded-t-xl w-full drop-shadow-md"
            />
            <div className="bg-basic-green p-4 mb-5 lg:mb-0">
              <h1 className="text-3xl lg:text-5xl text-center lg:pb-2 md:text-5xl text-accent-blue font-bold">
                Renja Ferry Schmakeit
              </h1>
              <h3 className="text-xl lg:text-3xl text-center md:text-3xl text-accent-blue/80 font-semibold">
                Junior Web- and App-Developer
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center content-center w-full lg:w-1/3 pb-7 lg:pb-0">
            <h3 className="text-2xl lg:text-3xl text-center font-bold mb-5 text-accent-blue pr-10 pl-10 lg:pr-0 lg:pl-0">
              Former Media Allrounder transforming into a passionate Web- and
              App-Developer
            </h3>
            <div className="flex flex-row p-1 m-2 content-center justify-center">
            <div className="tooltip origin-center mr-2 ml-2 w-full" data-tip="JavaScript">
              <JavaScriptIcon className="rounded-md bg-slate-100 p-1 origin-center hover:rotate-12 transition-all drop-shadow-md w-full h-full" />
              </div>
              <div className="tooltip origin-center mr-2 ml-2 w-full" data-tip="React">
              <ReactIcon className="rounded-md bg-slate-100 p-1 origin-center hover:-rotate-12 transition-all drop-shadow-md w-full h-full" />
              </div>
              <div className="tooltip origin-center mr-2 ml-2 w-full" data-tip="Next.js (This Website!)">
              <NextjsIcon className="rounded-md bg-slate-100 p-1 origin-center hover:rotate-12 transition-all drop-shadow-md w-full h-full" />
              </div>
              <div className="tooltip origin-center mr-2 ml-2 w-full" data-tip="Express">
              <ExpressIcon className="rounded-md bg-slate-100 p-1 origin-center hover:-rotate-12 transition-all drop-shadow-md w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:mt-10">
              <a
                href="#portfolio"
                className="btn btn-lg btn-accent bg-accent-blue mb-2 text-white hover:bg-accent-blue/80"
              >
                <div className="text-2xl lg:text-xl">Go to my Portfolio</div>
              </a>
              <a
                href="#about"
                className="btn btn-lg btn-neutral bg-slate-100 mb-2 hover:bg-slate-300"
              >
                <div className="text-2xl lg:text-xl">Get to know me</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
