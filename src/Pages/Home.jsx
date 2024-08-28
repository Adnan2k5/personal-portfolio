import React from "react";
import { Layout } from "../Layout/Layout";
import Typewriter from "typewriter-effect";
import vector from "../assets/vector.png";
import { Skills } from "./Skills";
import { Projects } from "./projects";

export const Home = () => {
  return (
    <div>
      <Layout>
        <div
          id="home"
          className="home-box  w-screen h-[80vh] mt-[10vh] z-10 flex flex-col lg:flex-row absolute"
        >
          <div className="text-side flex items-center text-center mt-[10vh] text-2xl md:text-3xl lg:text-4xl p-5 gap-4 w-full lg:w-[55%]">
            <div className="text -mt-[5rem] lg:-mt-[11rem] w-full gap-3 ">
              <h1>
                Adnan Ashraf, <br />{" "}
              </h1>
              <div className="typewriter text-cyan-300">
                <Typewriter
                  options={{
                    strings: ["MERN Stack", "AI/ML", "4 * Hacker Rank"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <h1 className="text-lg md:text-xl mt-5">
                B. Tech Cse <br /> KL University
              </h1>
            </div>
          </div>
          <div className="vector-side relative -ml-0 lg:-ml-[12rem] -z-10 flex justify-center lg:justify-start h-[50vh] lg:h-[80vh] mt-5 lg:mt-0">
            <img
              className="w-[100%]  lg:w-full h-full rounded-full object-cover"
              src={vector}
              alt="vector"
            />
          </div>
        </div>

        <div className="skills mt-[100vh] lg:mt-[90vh]">
          <Skills />
        </div>

        <div className="projects  justify-center flex mt-[60vh]">
          <Projects />
        </div>
      </Layout>
    </div>
  );
};
