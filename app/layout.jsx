import { Geist_Mono, Quicksand } from 'next/font/google';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import About from './components/sections/About.jsx';
import Contact from './components/sections/Contact.jsx';
import Hero from './components/sections/Hero.jsx';
import Process from './components/sections/Process.jsx';
import Projects from './components/sections/Projects.jsx';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata = {
  title: 'Endo Illustrated',
  description: 'Bringing endodontic science to life through illustration.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Process />
          <Contact />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
