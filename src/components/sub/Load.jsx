'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoad(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? '-100%' : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <img
        src="/spinner.gif"
        alt="Loading..."
        role="status"
        aria-live="polite"
      />
    </motion.div>
  );
};
export default Load;
