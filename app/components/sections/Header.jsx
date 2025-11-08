'use client';

import Image from 'next/image';
import HeroImage from '../../../public/header-image.jpg';
import Button from '../ui/Button.jsx';

const Header = () => {
  return (
    // Use dynamic viewport units to account for browser UI (100dvh)
    <header className="relative w-full h-dvh overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="" // Decorative image; hidden from screen readers
          role="presentation"
          fill
          className="object-cover object-center opacity-90"
          sizes="100vw"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-center md:items-center">
        <div className="max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] w-[90%] text-gray-900 dark:text-[var(--background)] px-4 text-left md:text-center flex flex-col items-start md:items-center">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 font-quicksand leading-tight">
            Endo Illustrated:
            <br />
            Visual Guides for Endodontic Procedures
          </h1>

          {/* SEO Descriptive Text */}
          <p className="text-lg sm:text-xl mb-6 font-quicksand max-w-[650px]">
            Bringing endodontic science to life through high-quality
            illustrations.
          </p>

          {/* Optional visually hidden text for additional SEO context */}
          <span className="sr-only">
            Detailed visual guides and endodontic procedure illustrations for
            students and professionals.
          </span>

          {/* Call-to-Action Button */}
          <Button
            text="Let's Connect"
            color="rose"
            href="#contact"
            aria-label="Scroll to contact section"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
