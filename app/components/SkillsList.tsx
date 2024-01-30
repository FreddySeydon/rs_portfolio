"use client";
import React, { useState } from "react";
import Skill from "./Skill";
import {
  ExpressIcon,
  ReactIcon,
  JavaScriptIcon,
  NextjsIcon,
  CssIcon,
  FirebaseIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  IllustratorIcon,
  MongoIcon,
  PhotoshopIcon,
  PostgresIcon,
  PythonIcon,
  PremiereIcon,
  SassIcon,
  SlackIcon,
  SqliteIcon,
  TailwindIcon,
  TrelloIcon,
  TypeScriptIcon,
  VsCodeIcon,
  WebStormIcon,
  XdIcon,
  ReactNativeIcon,
  MySqlIcon,
  ChatGptIcon,
  ExpoIcon,
  FigmaIcon
} from "./Icons";

const SkillsList = () => {
  const skillIcons = [
    { component: <JavaScriptIcon />, name: "JavaScript" },
    { component: <ReactIcon />, name: "React (Native)" },
    { component: <ExpressIcon />, name: "Express" },
    { component: <NextjsIcon />, name: "Next.js" },
    // { component: <ReactNativeIcon />, name: 'React Native' },
    { component: <HtmlIcon />, name: "HTML 5" },
    { component: <CssIcon />, name: "CSS 3" },
    { component: <GitIcon />, name: "Git" },
    { component: <ExpoIcon />, name: "Expo (React Native)" },
    { component: <TypeScriptIcon />, name: "TypeScript" },
    { component: <MySqlIcon />, name: "MySQL" },
    { component: <MongoIcon />, name: "MongoDB" },
    { component: <TailwindIcon />, name: "Tailwind CSS" },
    { component: <PythonIcon />, name: "Python" },
    { component: <SassIcon />, name: "Sass" },
    { component: <GitHubIcon />, name: "GitHub" },
    { component: <FirebaseIcon />, name: "Firebase" },
    { component: <PostgresIcon />, name: "PostgreSQL" },
    { component: <SqliteIcon />, name: "SQLite" },
    { component: <VsCodeIcon />, name: "VS Code" },
    { component: <ChatGptIcon />, name: "Chat GPT / Tyler" },
    { component: <SlackIcon />, name: "Slack" },
    { component: <TrelloIcon />, name: "Trello" },
    { component: <WebStormIcon />, name: "WebStorm" },
    { component: <FigmaIcon />, name: "Figma" },
    { component: <XdIcon />, name: "Adobe XD" },
    { component: <PremiereIcon />, name: "Premiere Pro" },
    { component: <PhotoshopIcon />, name: "Photoshop" },
    { component: <IllustratorIcon />, name: "Illustrator" },
  ];

  const [isMore, setIsMore] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.checked) {
      setIsMore(true);
    } else {
      setIsMore(false);
    }
  };

  return (
    <div className="rounded-box bg-basic-green p-5 drop-shadow-sm h-max">
      <h2 className="text-3xl text-center font-bold mb-5 uppercase text-accent-blue">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {skillIcons.map((IconComponent, index) =>
          index <= 11 ? (
            <div className="tooltip" data-tip={IconComponent.name} key={index}>
              <Skill
                IconComponent={IconComponent.component}
                key={index}
                index={index}
                fill="rgb(156, 189, 178)"
              />
            </div>
          ) : null
        )}
      </div>
      <div className="collapse bg-base-200">
        <input type="checkbox" onChange={handleChange} />
        <div className="collapse-title text-xl font-medium text-center flex justify-center m-0 p-0 pt-2">
          <p className=" m-0 p-0 text-center underline text-3xl lg:text-xl">
            {" "}
            {isMore ? "less..." : "more..."}
          </p>
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-4 gap-2">
            {skillIcons.map((IconComponent, index) =>
              index >= 12 ? (
                <div
                  className="tooltip"
                  data-tip={IconComponent.name}
                  key={index}
                >
                  <Skill
                    IconComponent={IconComponent.component}
                    key={index}
                    index={index}
                    fill="rgb(156, 189, 178)"
                  />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SkillsList;
