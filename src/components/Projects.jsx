'use client';

import { projectsButton, projectsData } from '@/assets';
import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Heading from './sub/Heading';
import Project from './sub/Project';

const Projects = () => {
  const [tech, setTech] = useState('All');
  const [index, setIndex] = useState(0);

  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);

  // motion/react animation controller
  const [scope, animate] = useAnimate();

  // Animate the button states (active vs inactive)
  const handleClick = async () => {
    const prevBtn = buttonsRef.current[prevIndex.current];
    const currBtn = buttonsRef.current[index];

    if (!prevBtn || !currBtn) return;

    await animate(
      prevBtn,
      { opacity: 0.5, scale: 1 },
      { duration: 0.25, easing: 'ease-out' }
    );

    await animate(
      currBtn,
      { opacity: 1, scale: 1.2 },
      { duration: 0.25, easing: 'ease-in' }
    );
  };

  // Animate project cards when filter changes
  const animateProjects = async () => {
    const cards = scope.current.querySelectorAll('.project-card');
    await animate(
      cards,
      { opacity: [0, 1], y: [40, 0] },
      {
        delay: stagger(0.08),
        duration: 0.5,
        easing: 'ease-out',
      }
    );
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  useEffect(() => {
    animateProjects();
  }, [tech]);

  // Filter projects based on selected tech
  const filteredProjects = projectsData.filter(project =>
    tech === 'All' ? true : project.tech.includes(tech)
  );

  return (
    <div id="projects" ref={scope} className="min-h-screen py-20">
      <Heading text={'Projects'} />

      {/* Filter buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-10 ">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={el => (buttonsRef.current[i] = el)}
            onClick={() => {
              setTech(text);
              setIndex(i);
            }}
            transition={{ duration: 0.25 }}
            className={`border border-yellow-500 rounded-xl px-3 py-1 text-sm font-light tracking-wider transition-all ${
              index === i
                ? 'text-yellow-600'
                : 'text-gray-400 hover:text-yellow-400'
            }`}
          >
            {text}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {filteredProjects.map((data, i) => (
          <motion.div
            key={`proj-${i}`}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.08, // sequential appearance
              easing: 'ease-out',
            }}
          >
            <Project data={data} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
