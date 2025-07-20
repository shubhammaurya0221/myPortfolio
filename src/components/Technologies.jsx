import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { animate, motion } from "framer-motion";

function Technologies() {
  // IconVariant function for animate icons
  const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1  
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariant(7)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-800" />
        </motion.div>
        <motion.div
          variants={iconVariant(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <BsBootstrap className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
