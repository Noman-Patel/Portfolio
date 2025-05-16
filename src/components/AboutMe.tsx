"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
  <>
  <div id="aboutMe">

  
    <motion.h2
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
    <section className="relative z-10 w-full py-24 px-5 md:px-10 bg-transparent">

        
      <div className="max-w-5xl mx-auto ">


        <motion.p
          className="text-lg leading-relaxed  max-w-3xl text-[var(--text-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m a passionate Fullstack Developer based in Philadelphia who loves
          building responsive, performant web apps with modern frameworks like
          Next.js, Tailwind CSS, and React. My focus is on crafting clean UIs,
          intuitive user experiences, and solving real-world problems through
          code. Whether I&apos;m debugging in the terminal or designing a UI in Figma,
          I thrive in bringing ideas to life through development.
        </motion.p>
      </div>
    </section>
    </div>
  </>
  );
}