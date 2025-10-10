'use client';

import { questionArrow } from '@/assets';
import { motion } from 'motion/react';
import { useState } from 'react';

const Question = ({ data, index }) => {
  const [show, setShow] = useState(false);

  const variants = {
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
    hidden: { opacity: 0, x: -30 },
  };

  return (
    <motion.li
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: '50px', once: true }}
      variants={variants}
      className="border border-yellow-500 p-1 rounded-lg"
    >
      <div
        role="button"
        onClick={() => setShow(!show)}
        className={`flex items-center text-gray-800 hover:text-yellow-600 text-xl font-extralight  tracking-wide cursor-pointer ${
          show && 'border-b text-yellow-600'
        }`}
      >
        <motion.span animate={{ rotate: show ? 180 : 0 }}>
          {questionArrow}
        </motion.span>
        <span>{data.question}</span>
      </div>
      <motion.p
        initial={{ scaleY: 0, maxHeight: 0, opacity: 0 }}
        animate={{
          scaleY: show ? 1 : 0,
          maxHeight: show ? 300 : 0,
          opacity: show ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: show ? 250 : 50,
          opacity: { delay: show ? 0.1 : 0 },
        }}
        className="overflow-hidden box-border origin-top pl-8 text-lg font-extralight tracking-wide text-gray-900 first-letter:pl-3"
      >
        {data.answer}
      </motion.p>
    </motion.li>
  );
};
export default Question;
