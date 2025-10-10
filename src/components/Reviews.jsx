'use client';

import { arrowIcons, reviewsData, starIcons } from '@/assets';
import { motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Heading from './sub/Heading';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // imperative animate from motion/react
  const [scope, animate] = useAnimate();

  // refs to each slide element
  const slides = useRef([]);

  // helper to safely get node
  const getSlide = i => slides.current[i];

  // POSITION ALL SLIDES ON MOUNT (initial layout)
  useEffect(() => {
    if (!slides.current || slides.current.length === 0) return;

    slides.current.forEach((el, i) => {
      if (!el) return;
      // put active slide centered, others off to the right
      if (i === index) {
        // visible
        el.style.transform = 'translateX(0%) scale(1) rotate(0deg)';
        el.style.opacity = '1';
        el.style.zIndex = '2';
      } else {
        // hidden to the right initially
        el.style.transform = 'translateX(100%) scale(0.95) rotate(0deg)';
        el.style.opacity = '0';
        el.style.zIndex = '1';
      }
      // ensure element is positioned absolutely (your classes already set this)
      el.style.willChange = 'transform, opacity';
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // core slide function: dir = +1 (next) or -1 (prev)
  const slide = async dir => {
    if (isAnimating) return;
    const next = index + dir;
    if (next < 0 || next >= reviewsData.length) return;

    setIsAnimating(true);

    const prevEl = getSlide(index);
    const nextEl = getSlide(next);

    if (!prevEl || !nextEl) {
      setIsAnimating(false);
      return;
    }

    // Prepare next element visually BEFORE animating so it sits on top
    const fromX = dir > 0 ? '100%' : '-100%';
    const incomingRotate = dir > 0 ? 25 : -25; // angled when coming in
    nextEl.style.transform = `translateX(${fromX}) scale(0.95) rotate(${incomingRotate}deg)`;
    nextEl.style.opacity = '0';
    nextEl.style.zIndex = '3'; // make sure incoming sits above previous

    // set prev z-index a bit lower so it looks like it moves under
    prevEl.style.zIndex = '2';

    // Animate previous card to scale down and rotate (go under)
    const prevAnim = animate(
      prevEl,
      {
        scale: 0.4,
        rotate: index % 2 === 0 ? 10 : -10, // alternating rotation for variety
        opacity: 0.9,
        // slight x offset so it feels like it's pushed under
        x: dir > 0 ? '-10%' : '10%',
      },
      {
        duration: 0.4,
        easing: 'ease-in-out',
      }
    );

    // Animate incoming card sliding into place on top
    const incomingAnim = animate(
      nextEl,
      {
        x: [fromX, '0%'],
        opacity: [0, 1],
        scale: [0.95, 1],
        rotate: [incomingRotate, 0],
      },
      {
        duration: 0.78,
        delay: 0.08,
        easing: 'ease-out',
      }
    );

    // wait for both animations to finish
    try {
      await Promise.all([prevAnim, incomingAnim]);
    } catch (e) {
      // ignore animation errors
    }

    // normalize z-indexes after animation
    prevEl.style.zIndex = '1';
    nextEl.style.zIndex = '2';

    // keep the previous scaled/rotated look (visual choice). If you prefer to
    // reset prev card to offscreen (right/left) so it doesn't remain visible,
    // uncomment the next line to push prev offscreen:
    // prevEl.style.transform = `translateX(${dir > 0 ? '-100%' : '100%'}) scale(0.95) rotate(0deg)`, prevEl.style.opacity='0';

    // update index (this is safe now)
    setIndex(next);

    // re-enable interaction
    setIsAnimating(false);
  };

  return (
    <div id="reviews" ref={scope} className="py-20">
      <Heading text={'Client Reviews'} />
      <div className="flex flex-col items-center justify-center">
        {/* container can still use motion for entry if desired */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] min-h-[500px] lg:min-h-[450px] md:min-h-[400px] sm:min-h-[600px] flex items-center justify-center overflow-hidden"
        >
          {reviewsData.map((review, i) => (
            <div
              // note: we use plain divs here and animate them imperatively via useAnimate
              key={i}
              ref={el => (slides.current[i] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 min-h-full box-border rounded-xl"
            >
              <Image
                src={review.image}
                alt={review.name}
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars.reduce((sum, item) => sum + item, 0).toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, si) => (
                    <span key={si}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* controls */}
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? 'opacity-30 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            } hover:scale-150 transition-transform`}
            onClick={() => slide(-1)}
            disabled={isAnimating || index === 0}
            aria-label="previous"
          >
            {arrowIcons[0]}
          </button>

          <button
            className={`${
              index === reviewsData.length - 1
                ? 'opacity-30 pointer-events-none'
                : 'opacity-100 pointer-events-auto'
            } hover:scale-150 transition-transform`}
            onClick={() => slide(1)}
            disabled={isAnimating || index === reviewsData.length - 1}
            aria-label="next"
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
