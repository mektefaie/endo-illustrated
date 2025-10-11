'use client';

import { useEffect, useState } from 'react';

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50">
      <img src="spinner.gif" alt="spinner Fig"></img>
    </div>
  );
};
export default Load;
