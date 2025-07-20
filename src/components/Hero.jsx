import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../../public/profile.jpg"; // Use next/image if using Next.js
import { motion } from "framer-motion";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className=" h-fit flex pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-20">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl"
            >
              Shubham Maurya
            </motion.h1>
            <motion.span 
             variants={container(0.5)}
              initial="hidden"
              animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend Developer
            </motion.span>
            <motion.p 
             variants={container(1)}
              initial="hidden"
              animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img 
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
              src={profilePic}
              alt="Profile"
              className="h-[400px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
