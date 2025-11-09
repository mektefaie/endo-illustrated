'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../../../public/ei-logo.png';
import Container from '../ui/Container.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ['about', 'projects', 'process', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64); // same as h-16
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = link => {
    setActive(link);
    setTimeout(() => setMenuOpen(false), 300);
  };

  return (
    <nav
      aria-label="Primary"
      className={`font-quicksand fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md shadow-sm ${
        isScrolled
          ? 'bg-[var(--background)] bg-opacity-95 text-[var(--foreground)] shadow-sm'
          : 'bg-transparent text-[var(--foreground)]'
      }`}
    >
      <Container className="flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#header"
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-2 select-none"
        >
          <Image
            src={Logo}
            alt="Endo Illustrated Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold tracking-wide dark:text-[var(--foreground)]">
            Ei
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map(link => (
            <li key={link} className="relative group">
              <a
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                aria-current={active === link ? 'page' : undefined}
                className="relative transition-colors duration-300 tracking-wider font-medium hover:text-[var(--accent)] dark:text-[var(--foreground)]"
                style={active === link ? { color: 'var(--accent)' } : {}}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full transition-transform duration-300 origin-center ${
                    active === link
                      ? 'scale-x-100 bg-[var(--accent)]'
                      : 'scale-x-0 bg-[var(--accent)]'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-8 h-8 flex items-center justify-center outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu
            size={24}
            className={`absolute transition-all duration-300 ease-in-out ${
              menuOpen
                ? 'opacity-0 scale-75 rotate-90'
                : 'opacity-100 scale-100 rotate-0'
            } text-[var(--foreground)] dark:text-[var(--foreground)]`}
          />
          <X
            size={24}
            className={`absolute transition-all duration-300 ease-in-out ${
              menuOpen
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-75 -rotate-90'
            } text-[var(--foreground)] dark:text-[var(--foreground)]`}
          />
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden border-t bg-[var(--background)] dark:text-[var(--foreground)] bg-opacity-95 backdrop-blur-md ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className={`relative group transform transition-all duration-500 delay-${
                i * 75
              } ${
                menuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-3'
              }`}
            >
              <a
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                aria-current={active === link ? 'page' : undefined}
                className="relative text-lg transition-colors duration-300 tracking-wider font-medium hover:text-[var(--accent)]"
                style={active === link ? { color: 'var(--accent)' } : {}}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full transition-transform duration-300 origin-center ${
                    active === link
                      ? 'scale-x-100 bg-[var(--accent)]'
                      : 'scale-x-0 bg-[var(--accent)]'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
