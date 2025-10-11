'use client';

import { navbarData } from '@/assets';

const Navbar = ({ id }) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 xl:py-6 z-10">
      {/* Logo */}
      <a href="/#home">
        <span className="text-3xl font-semibold text-red-400">E</span>
        <span className="text-xl font-semibold text-red-400 ">.</span>
        <span className="block w-min rotate-90 origin-bottom text-[13.5px] font-semibold -ml-3 dark:text-white">
          Illustrated
        </span>
      </a>

      {/* Nav links */}
      <div className="flex flex-col gap-y-3 xl:gay-y-1 sm:gap-y-2 xs:gap-y-0">
        {navbarData.map(item => {
          const Icon = item.icon; // instantiate component
          const isActive = item.id === id;
          return (
            <a
              href={`/#${item.id}`}
              key={item.id}
              className="group flex flex-col items-center gap-y-2"
            >
              {/* Icon */}
              <Icon
                className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${
                  isActive
                    ? 'text-red-500 scale-110 xl:scale-100 xs:scale-80'
                    : 'text-yellow-600 scale-100 xl:scale-90 xs:scale-70'
                }`}
              />
              {/* Label */}
              <span
                className={`text-[11px] tracking-wide text-center dark:text-white transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Copyright */}
      <div className="relative flex items-center justify-center text-[13px] xs:text-[11px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors ">
          <span className="mr-1 text-lg ">©</span>
          2019 - {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
