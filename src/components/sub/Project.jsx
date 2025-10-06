'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Project = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      className="relative group w-[350px] sm:w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden border border-yellow-400 rounded-lg cursor-pointer"
    >
      {/* Project Image */}
      <Image
        src={data.url}
        alt="project image"
        fill
        className="object-cover rounded-lg opacity-70 transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Hover Overlay with Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-600">
          {data.name}
        </h2>
        <p className="text-justify text-gray-600 first-letter:pl-2">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
