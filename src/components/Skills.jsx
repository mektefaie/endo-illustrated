'use client';

import { skillsData } from '@/assets';
import Image from 'next/image';
import Heading from './sub/Heading';

// Motion (motion.dev) for React
import { motion } from 'motion/react';

const Skills = () => {
  // Variants for container and items to handle staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // cascading effect
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, duration: 0.5 },
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
      <Heading text={'Skills'} />

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-8 gap-y-10 justify-items-center w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {skillsData.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex items-center justify-start gap-x-2 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 w-full max-w-[250px]"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={itemData.icon}
              height={100}
              width={100}
              alt="skills Image"
              className="h-auto w-[40px] shrink-0"
            />
            <p className="text-sm text-gray-600">{itemData.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
