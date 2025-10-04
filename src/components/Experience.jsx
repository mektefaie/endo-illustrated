'use client';

import { arrowLeftIcon, experienceData } from '@/assets';
import Image from 'next/image';
import { useRef } from 'react';
import Heading from './sub/Heading';

// Motion (motion.dev) for React
import { motion, useMotionValue, useScroll, useSpring } from 'motion/react';

const Experience = () => {
  // const currentYear = new Date().getFullYear();

  // ref that wraps the whole timeline section (used for the timeline animation)
  const timelineRef = useRef(null);

  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end end'],
  });

  // Smooth the raw scroll progress with a spring for a more natural motion
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 1,
  });

  // Animate timeline only once: clamp progress to 0 → 1, then freeze at 1.
  const clamped = useMotionValue(0);
  springProgress.on('change', v => {
    if (clamped.get() < 1) {
      clamped.set(Math.min(v, 1));
    }
  });

  return (
    <div className="relative py-20 px-6 md:px-20 lg:px-40 xl:px-60">
      <Heading text={'Experience & Education'} />

      <Image
        src={'/education.png'}
        height={400}
        width={400}
        alt={'experience Image'}
        className="absolute -top-4 right-0 opacity-70 lg:hidden"
      />

      {/* WRAPPER: contains the timeline line + all the blocks. */}
      <div
        ref={timelineRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {/* TIMELINE VERTICAL LINE - animated with scaleY from 0 -> 1 once */}
        <motion.div
          style={{
            scaleY: clamped,
            transformOrigin: 'top',
          }}
          className="absolute w-1 h-full rounded-full bg-gray-300 left-1/2 -translate-x-1/2"
          aria-hidden
        />

        {experienceData.map((data, index) => (
          <motion.div
            key={`id-${index}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
              index % 2 === 0
                ? '-left-[300px] xl:-left-[240px] lg:-left-0'
                : 'left-[300px] xl:left-[240px] lg:left-0'
            }`}
          >
            <div className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20">
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
                {data.title}
              </h1>

              <p className="text-gray-800 dark:text-gray-100">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>

              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, idx) => (
                    <li key={idx} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  index % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                }`}
              >
                {arrowLeftIcon}
              </span>
            </div>

            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                index % 2 === 0
                  ? 'left-full -translate-x-1/2 lg:left-1/2'
                  : 'right-full translate-x-1/2 lg:right-1/2'
              }`}
            >
              {/* {currentYear - experienceData.length + index + 1} */}
              {data.year}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
