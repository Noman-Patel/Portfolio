'use client';
import { motion } from 'framer-motion';

export default function AllSkills() {
  return (
    <motion.h2
    className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
     Skills 
  </motion.h2>
  );
}