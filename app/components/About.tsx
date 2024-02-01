import React from "react";
import calculateAge from "@/utils";
import SkillsList from "./SkillsList";
import KeyData from "./KeyData";

const About = () => {
  return (
    <>
      <div className="flex flex-col bg-accent-blue h-fit">
        <h1 className="uppercase text-5xl text-slate-100 font-bold ml-10 mt-8">
          About Me
        </h1>
        <div
          className="flex flex-col w-full lg:flex-row p-5 bg-accent-blue pt-8 mb-5"
          style={{ height: "auto" }}
        >
          <div className="w-full lg:w-1/3 h-full pb-9 mb-5 lg:mb-0 rounded-box bg-basic-green pl-5 pr-5 drop-shadow-sm">
            <div className="mt-5 mb-5 lg:mb-2 text-xl font-medium">
              <h2 className="text-3xl text-center font-bold text-accent-blue uppercase">
                Key Data
              </h2>
            </div>
            <div className="lg:overflow-x-auto">
              <KeyData />
            </div>
          </div>
          <div className="divider divider-horizontal divider-primary"></div>
          <div className="w-full lg:w-1/3 h-full lg:min-h- pb-7 mb-5 lg:mb-0 rounded-box bg-slate-100 p-5 drop-shadow-sm">
            <h2 className="text-3xl text-center font-bold mb-5 text-accent-blue uppercase">
              Short description
            </h2>
            <h3 className="text-2xl text-center mb-5 text-black">
              I studied Design & Media in Hannover and worked in the media
              industry for 10 years in various positions on set and in the
              production office as well as in post production. The skillset I
              acquired during that time comes in handy in a lot of situations on my new journey
              to becoming an excellent coder.
            </h3>
          </div>
          <div className="divider divider-horizontal divider-primary"></div>
          <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
            <SkillsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
