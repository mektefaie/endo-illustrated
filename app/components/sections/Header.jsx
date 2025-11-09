'use client';

import Image from 'next/image';
import HeroImage from '../../../public/hero-image.png';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';

const Header = () => {
  return (
    <Container>
      <header className="relative w-full min-h-[100dvh] flex flex-col lg:flex-row overflow-hidden">
        {/* === Content Section === */}
        <div className="relative z-10 flex flex-col justify-center items-center lg:items-start w-full lg:w-[55%] md:px-12 py-20 lg:py-0 text-[var(--foreground)] dark:text-[var(--foreground)] min-h-[100dvh] lg:px-8 xl:px-12">
          <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
            <h1 className="flex-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-quicksand leading-tight">
              <span className="block lg:text-[0.8em] xl:text-[0.85em] 2xl:text-[0.9em]">
                Endodontics:
              </span>

              <span className="block lg:text-[0.8em] xl:text-[0.85em] relative">
                {/* === Wider Horizontal Natural Highlight === */}
                <span className="relative inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -10 400 80"
                    className="absolute -left-1 lg:-left-8 xl:-left-12 top-1/2 transform -translate-y-1/2 w-[105%] lg:w-[120%] h-full opacity-40 -z-10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 50 C100 35, 200 65, 400 45 C480 35, 500 55, 500 40"
                      fill="none"
                      stroke="rgba(244,63,94,0.45)"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="relative z-10">Scientifically</span>
                </span>{' '}
                Illustrated
              </span>
            </h1>

            <p className="text-lg leading-8 tracking-wide sm:text-xl mb-6 font-quicksand max-w-[600px] mx-auto lg:mx-0">
              Integrating scientific accuracy with artistic precision to
              visually communicate the principles, procedures, and techniques in
              endodontics.
            </p>

            <Button
              text="Let's Connect"
              color="rose"
              href="#contact"
              showIcon="true"
              aria-label="Scroll to contact section"
            />
          </div>
        </div>

        {/* === Right: Image Column (visible on lg and up) === */}
        <div className="hidden lg:flex relative w-[45%] lg:pl-6 items-center justify-center bg-[var(--background)]">
          <div className="relative w-full h-[100dvh]">
            <Image
              src={HeroImage}
              alt="Endodontic visual guide illustration"
              fill
              className="object-contain object-center"
              sizes="40vw"
              priority
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
