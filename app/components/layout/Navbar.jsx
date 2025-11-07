'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../../../public/ei-logo.png';
import Container from '../ui/Container.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  const navLinks = ['about', 'projects', 'process', 'contact'];

  const handleLinkClick = link => {
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className="font-quicksand fixed top-0 left-0 w-full z-50 shadow-sm backdrop-blur-md
              bg-(--background) text-(--foreground)"
    >
      {' '}
      <Container className="flex justify-between items-center h-16">
        {/* Brand + Logo */}
        <a
          href="#hero"
          onClick={() => handleLinkClick('hero')}
          className="flex items-center space-x-2 select-none"
        >
          {' '}
          <Image
            src={Logo}
            alt="Endo Illustrated Logo"
            width={32}
            height={32}
          />{' '}
          <span className="text-xl font-bold">Endo Illustrated</span>{' '}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <li key={link} className="relative group">
              <a
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                aria-current={active === link ? 'page' : undefined}
                className={`
              relative transition-colors duration-300
              ${active === link ? 'text-(--accent)' : 'text-(--foreground)'}
              hover:text-(--accent)
            `}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {/* Underline */}
                <span
                  className={`
                absolute left-0 -bottom-1 h-0.5 w-full transition-transform duration-300 origin-left
                ${
                  active === link
                    ? 'scale-x-100 bg-(--accent)'
                    : 'scale-x-0 bg-(--accent)'
                }
              `}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu
            size={24}
            className={`absolute transition-all duration-300 ease-in-out
                    ${
                      menuOpen
                        ? 'opacity-0 scale-75 rotate-90'
                        : 'opacity-100 scale-100 rotate-0'
                    }
                    text-(--foreground)`}
          />
          <X
            size={24}
            className={`absolute transition-all duration-300 ease-in-out
                    ${
                      menuOpen
                        ? 'opacity-100 scale-100 rotate-0'
                        : 'opacity-0 scale-75 -rotate-90'
                    }
                    text-(--foreground)`}
          />
        </button>
      </Container>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
                ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                bg-(--background) border-t border-(--foreground) bg-opacity-95 backdrop-blur-sm`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map(link => (
            <li key={link} className="relative group">
              <a
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                aria-current={active === link ? 'page' : undefined}
                className={`
              relative text-lg transition-colors duration-300
              ${active === link ? 'text-(--accent)' : 'text-(--foreground)'}
              hover:text-(--accent)
            `}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`
                absolute left-0 -bottom-1 h-0.5 w-full transition-transform duration-300 origin-left
                ${
                  active === link
                    ? 'scale-x-100 bg-(--accent)'
                    : 'scale-x-0 bg-(--accent)'
                }
              `}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
