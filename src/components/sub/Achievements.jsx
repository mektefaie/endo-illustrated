'use client';

import { animate, useInView, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const Achievements = ({ title, amount, children }) => {
  const motionAmount = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  const ref = useRef(null);

  // useInView with { once: false } to allow retriggering
  const isInView = useInView(ref, {
    amount: 0.6, // 60% of the component visible
    once: true, // <- true: to count up only once, false: to count up every time in view
  });

  useEffect(() => {
    if (!isInView) return;

    // Reset value before each animation
    motionAmount.set(0);

    const controls = animate(motionAmount, amount, {
      duration: 1.5,
      delay: 0.5,
      easing: 'ease-out',
    });

    const unsubscribe = motionAmount.on('change', latest => {
      setDisplayValue(Math.round(latest));
    });

    return () => {
      controls.cancel();
      unsubscribe();
    };
  }, [isInView, amount]);

  return (
    <div ref={ref} className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <span className="text-2xl lg:text-xl font-light text-yellow-500">
          {displayValue}
        </span>
        <span className="text-sm tracking-wide text-gray-500">{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
