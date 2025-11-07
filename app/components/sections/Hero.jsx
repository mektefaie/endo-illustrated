const Hero = () => {
  return <div className="min-h-screen bg-amber-300">Hero</div>;
};
export default Hero;
// 'use client';

// import Image from 'next/image';
// import HeroImage from '../../../public/hero-image.png';
// import Button from '../ui/Button.jsx';
// import Container from '../ui/Container.jsx';

// export default function Hero() {
//   return (
//     <header className="relative w-full h-screen bg-[#fffef9] overflow-hidden">
//       {/* Mobile / tablet background image */}
//       <div className="absolute inset-0 lg:hidden">
//         <Image
//           src={HeroImage}
//           alt="Illustrative endodontic visual"
//           fill
//           className="object-cover opacity-20"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <Container className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center h-full justify-center lg:justify-between pt-20 lg:pt-0">
//         {/* Left-side content */}
//         <div className="lg:w-[600px] flex flex-col justify-center text-gray-900 dark:text-gray-100">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-quicksand">
//             Endodontics Scientifically Illustrated
//           </h1>
//           <p className="text-lg sm:text-xl mb-6 font-quicksand">
//             Bringing endodontic science to life through illustrations.
//           </p>
//           <Button text="Let's Connect" color="rose" href="#contact" />
//         </div>

//         {/* Right-side image for lg and bigger */}
//         <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end h-full relative">
//           <Image
//             src={HeroImage}
//             alt="Illustrative endodontic visual"
//             width={800}
//             height={600}
//             className="object-contain opacity-100"
//             priority
//           />
//         </div>
//       </Container>
//     </header>
//   );
// }
