import React from "react";
import calculateAge from "@/utils";
import SkillsList from "./SkillsList";
import KeyData from "./KeyData";

const About = () => {

  return (
    <>
    <div className="flex flex-col bg-accent-blue">
      <h1 className="uppercase text-5xl text-slate-100 font-bold ml-10 mt-8">About Me</h1>
    <div className="flex flex-col w-full lg:flex-row p-5 bg-accent-blue pt-8 mb-5" style={{height: '500px'}}>
      <div className="w-1/3 h-full pb-9 rounded-box bg-basic-green pl-5 pr-5 drop-shadow-sm">
        <div className="collapse-title text-xl font-medium">
          <h2 className="text-3xl text-center font-bold mb-2 text-accent-blue uppercase">Key Data</h2>
        </div>
        <div>
          <KeyData />
        </div>
      </div>
      <div className="divider divider-horizontal divider-primary"></div>
      <div className="w-1/3 h-full pb-7 rounded-box bg-slate-100 p-5 drop-shadow-sm">
        <h2 className="text-3xl text-center font-bold mb-5 text-accent-blue uppercase">
          Short description
        </h2>
        <h3 className="text-2xl font-bold text-center mb-5 text-black">
          I studied Design & Media in Hannover and worked in the media industry
          for 10 years in various positions on set and in the production office
          as well as in post production. The skillset I acquired during that
          time comes in handy a lot on my new journey to becoming an excellent
          coder.
        </h3>
      </div>
      <div className="divider divider-horizontal divider-primary"></div>
      <SkillsList />

    </div>
    </div>
    </>
  );
};

export default About;
