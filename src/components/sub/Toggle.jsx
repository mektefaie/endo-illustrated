'use client';

import { moonIcon, sunIcon } from '@/assets';
import { useRef, useState } from 'react';

const Toggle = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);

  const addDarkTheme = () => {
    mainRef.current.classList.add('dark');
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    mainRef.current.classList.remove('dark');
    setDarkTheme(false);
  };

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-80 sm:pr-5 overflow-hidden">
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
              } else {
                removeDarkTheme();
              }
            }}
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
          >
            <span className="absolute block rounded-full bg-zinc-50 p-1 text-4xl">
              {darkTheme ? sunIcon : moonIcon}
            </span>
            {/* <span className="absolute block rounded-full bg-zinc-50 p-1 text-3xl">
              {sunIcon}
            </span> */}
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};
export default Toggle;
