import React from "react";
import RehearsalPreview from "../../public/reheasal-preview.png";
import HonestcouchPreview from "../../public/honestcouch.jpg";
import QubicastPreview from "../../public/qubicast.png";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="flex flex-col h-fit">
      <h1 className="uppercase text-5xl text-accent-blue font-bold ml-10 mt-8">
        Portfolio
      </h1>
      <div
        className="flex flex-col lg:flex-row p-5 pt-8 justify-evenly h-min"
        style={{ minHeight: "500px" }}
      >
        <div className="flex flex-col gap-8">
        <div className="card lg:card-side w-full bg-base-100 shadow-xl">
            <figure className="lg:order-2 lg:rounded-2xl lg:rounded-l-none">
              <Image src={QubicastPreview} alt="QubiCast.com Website Preview" />
            </figure>
            <div className="card-body w-full lg:w-1/2 lg:order-1">
              <h2 className="card-title text-accent-blue text-2xl uppercase">
                QubiCast.com Website
              </h2>
              <p className="text-2xl pb-2 text-black">
                The Website of the theater lighting technology startup <b>QubiCast</b>.
                Made in next.js with a postgres database the website provides all the information about what the company does and even blog acrticles (more coming soon) about the protocols currently used in the stage lighting industry.
                The newsletter subscription form as well as the contact form are handled using useForm and nodemailer.
              </p>
              <a href="https://qubicast.com/" target="_blank">
                <div className="card-actions justify-center mt-2 mb-2">
                  <button className="btn btn-primary text-2xl lg:text-xl w-full">
                    Visit QubiCast.com
                  </button>
                </div>
              </a>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-accent-blue">Website</div>
                <div className="badge badge-outline text-accent-blue">Industry</div>
                <div className="badge badge-outline text-accent-blue">Tech</div>
              </div>
            </div>
          </div>
          <div className="card lg:card-side w-full bg-base-100 shadow-xl">
            <figure>
              <Image src={RehearsalPreview} alt="Rehearsal App Preview" />
            </figure>
            <div className="card-body w-full lg:w-1/2">
              <h2 className="card-title text-accent-blue text-2xl uppercase">
                Rehearsal App
                <div className="badge badge-secondary">WIP</div>
              </h2>
              <p className="text-2xl text-black">
                The Rehearsal App is a web app designed to help singers learn
                their voice. The central point for this is the mixer, with which
                you can make the individual voices of the practice playbacks
                louder and quieter using faders, as well as mute or solo them
                using a button. In addition, the lyrics of the individual songs
                are synchronized and clickable, so that you can jump to the
                corresponding position so that you don&apos;t always have to search
                for the right position during rehearsals. This can be very
                difficult with an instrumental playback without clickable
                Vocals.
              </p>
              <a href="http://songs.renja.cc" target="_blank">
                <div className="card-actions justify-center mt-2 mb-2">
                  <button className="btn btn-primary text-2xl lg:text-xl w-full">
                    Try it yourself!
                  </button>
                </div>
              </a>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-accent-blue">Productivity</div>
                <div className="badge badge-outline text-accent-blue">Music</div>
                <div className="badge badge-outline text-accent-blue">Learning</div>
              </div>
            </div>
          </div>
          <div className="card lg:card-side w-full bg-base-100 shadow-xl">
            <figure className="lg:order-2 lg:rounded-2xl lg:rounded-l-none">
              <Image src={HonestcouchPreview} alt="honestcouch Preview" />
            </figure>
            <div className="card-body w-full lg:w-1/2 lg:order-1">
              <h2 className="card-title text-accent-blue text-2xl uppercase">
                honestcouch
                <div className="badge badge-secondary">WIP</div>
              </h2>
              <p className="text-2xl pb-2 text-black">
                Answer a question every day and get to know your friends better
                despite the fast pace of everyday life. The social app
                &quot;honestcouch&quot; helps you to stay in touch and find out exciting
                things about your friends even in stressful times. Every day, a
                new question is sent by push message, which users can then
                answer. Once they have answered the question, they can see their
                friends&apos; answers. The app is my final project of the boot camp
                at the WBS Coding School made in React Native with Express
                backend and is currently being further developed by me. A closed beta
                version is available by invitation via the Google Play Store.
              </p>
              {/* <a href="LINK TO HONESTCOUCH" target="_blank">
                <div className="card-actions justify-center mt-2 mb-2">
                  <button className="btn btn-primary text-2xl lg:text-xl w-full">
                    PLACEHOLDER FOR FUTURE LINK
                  </button>
                </div>
              </a> */}
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-accent-blue">Social-App</div>
                <div className="badge badge-outline text-accent-blue">Digital Wellbeing</div>
                <div className="badge badge-outline text-accent-blue">Wholesome</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
