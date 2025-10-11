'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PricingPlans from '@/components/PricingPlans';
import Projects from '@/components/Projects';
import Questions from '@/components/Questions';
import Reviews from '@/components/Reviews';
import Skills from '@/components/Skills';
import Load from '@/components/sub/Load';
import Toggle from '@/components/sub/Toggle';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach(comp => {
      observer.observe(comp);
    });
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Reviews />
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
