'use client';

import { moonIcon, sunIcon } from '@/assets';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);

  const addDarkTheme = () => {
    if (mainRef.current) mainRef.current.classList.add('dark');
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    if (mainRef.current) mainRef.current.classList.remove('dark');
    setDarkTheme(false);
  };

  useEffect(() => {
    const storedTheme = reactLocalStorage.get('darkTheme');
    const parsedTheme = storedTheme ? JSON.parse(storedTheme) : null;

    const systemTheme =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === null || storedTheme === undefined) {
      systemTheme ? addDarkTheme() : removeDarkTheme();
    } else {
      parsedTheme ? addDarkTheme() : removeDarkTheme();
    }
  }, []);

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-80 sm:pr-5 overflow-hidden">
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                reactLocalStorage.set('darkTheme', true);
              } else {
                removeDarkTheme();
                reactLocalStorage.set('darkTheme', false);
              }
            }}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 relative"
            aria-label="Toggle dark mode"
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-800 p-1 text-4xl"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-800 p-1 text-3xl"
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
