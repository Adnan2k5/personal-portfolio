import React from "react";
import { motion } from "framer-motion";
import './home.css';

export const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div  className="skill-box bg-transparent m-auto rounded-lg p-5 w-[90vw] h-[90vh]">
        <div className="header flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl w-fit text-center">
            Skills
          </h1>
        </div>

        <div className="cards flex flex-col md:flex-row w-full justify-around mt-10">
          <div className="card-shine-effect w-full md:w-[40%] mb-10 md:mb-0">
            <h3 className="title text-center text-2xl md:text-3xl">WEB DEVELOPMENT</h3>
            <p className="description text-base md:text-lg text-center">
              React, JS, Express, <br /> Node, MongoDB.
            </p>
          </div>

          <div className="card-shine-effect w-full md:w-[40%]">
            <h3 className="title text-center text-2xl md:text-3xl">AI/ML</h3>
            <p className="description text-base md:text-lg text-center">
              TensorFlow, Keras, <br /> NumPy, Pandas.
            </p>
          </div>
        </div>

        <div className="cards flex items-center w-full justify-around mt-10">
          <div className="card-shine-effect w-full md:w-[40%]">
            <h3 className="title text-center text-2xl md:text-3xl">Competitive Coder</h3>
            <p className="description text-base md:text-lg text-center">
              C/C++, Java, DSA <br />4 * HackerRank
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
