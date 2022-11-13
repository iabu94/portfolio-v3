import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-start max-w-7xl mx-auto xl:items-center z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com/in/iabu94"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://iabu94.medium.com"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/iabu94"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/iabu94"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/iabu94"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer pr-5"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="hidden md:inline-flex uppercase text-gray-400 text-sm">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
