import React from "react";
import Typewriter from "typewriter-effect";
import vector from "../assets/vector.png";
import { Skills } from "./Skills";
import { NavBar } from "../Components/NavBar";
import IconCloud from "@/components/magicui/icon-cloud";
import { Projects } from "./projects";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const Home = () => {
  return (
    <div>
      <div className="container  flex w-[100vw] justify-center m-auto">
        <div className="navbar">
          <NavBar />
        </div>
        
        <div id="home" className="home flex  justify-between flex-col md:flex-row w-[90vw] mt-32 md:mt-40  xl:mt-40 p-5 h-[90vh]">
          <div className="box p-5 h-[50vh] relative flex w-[60vw]">
            <div className="title flex flex-col justify-center h-[20vh]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl">Hi,</h1>
              <h1 className="text-2xl mt-2 md:text-3xl lg:text-4xl">
                I'm <span className="text-blue-500">Adnan Ashraf</span>
              </h1>
              <h1 className="text-2xl mt-2 md:text-3xl lg:text-4xl">
                <span className="text-gray-500">
                  <Typewriter
                    options={{
                      strings: ["MERN STACK DEVELOPER", "AI/ML ENTHUSIAST", "COMPETITIVE CODER"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
          <div className="box2 lg:mr-32 h-fit ">
            <IconCloud iconSlugs={slugs}/>
          </div>
        </div>
      </div>
      <div id="skill" className="skills">
        <Skills />
      </div>
      <div id="project" className="projects">
        <Projects/>
      </div>
    </div>
  );
};
