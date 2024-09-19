'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroTitle } from '../ui/hero-highlight';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 z-0"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637778.jpg?t=st=1726739066~exp=1726742666~hmac=77d6dbfa1b78655bbc61805efa4b402f7d6bec646336bc4a7c66018b089dd13e&w=1060)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />

      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle
            normalText="Fortifying Your Digital Frontiers with"
            highlightText="Trusted Security"
          />
          <p className="text mb-8 max-w-3xl mx-auto leading-relaxed">
            In a world where digital threats evolve daily, your defense must be impenetrable. WebSec
            delivers cutting-edge cybersecurity solutions, safeguarding businesses of all sizes
            against tomorrow's challenges.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <SecurityCheckIcon size={32} className="text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SquareLockCheck02Icon size={32} className="text-green-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ComputerProtectionIcon size={32} className="text-purple-400" />
            </motion.div>
          </div>
          <motion.div
            className="mx-auto w-fit "
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button
              size="lg"
              className="px-8 py-2 rounded-md  text-white font-bold transition duration-200 hover:bg-primary/10  border-2 border-transparent hover:border-primary "
            >
              <Link href="#contact" className="w-full h-full">
                Secure Your Future
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

const SecurityCheckIcon = (props: React.SVGProps<SVGSVGElement> & { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SquareLockCheck02Icon = (props: React.SVGProps<SVGSVGElement> & { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d="M18.5002 11.4996C18.2252 10.4746 16.9752 8.99609 15.0752 9.09963C15.0752 9.09963 13.1434 8.99609 11.1909 8.99609C9.23839 8.99609 8.25019 9.02463 6.72519 9.09963C5.70019 9.09963 4.07519 9.67463 3.45019 11.4246C2.87446 13.1751 2.89974 16.7991 3.2502 18.6496C3.32529 19.5999 3.84822 20.9494 5.4002 21.6496C6.1502 22.0996 10.8502 21.9496 11.5002 21.9996"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6.51635 8.19624C6.46629 5.82059 6.36616 3.94508 9.11967 2.39466C10.0458 2.01956 11.4226 1.69447 13.1248 2.49469C14.902 3.56998 15.1234 4.70796 15.2775 4.99537C15.7031 6.12068 15.4778 7.72111 15.5278 8.37129"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15.6702 18.444C15.9702 18.588 16.3422 18.96 16.5222 19.26C16.5822 19.68 16.8822 18.06 18.3462 17.1M21.0002 18C21.0002 20.2091 19.2094 22 17.0002 22C14.7911 22 13.0002 20.2091 13.0002 18C13.0002 15.7909 14.7911 14 17.0002 14C19.2094 14 21.0002 15.7909 21.0002 18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ComputerProtectionIcon = (props: React.SVGProps<SVGSVGElement> & { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.size}
    height={props.size}
    color={'#000000'}
    fill={'none'}
    {...props}
  >
    <path
      d="M22 13C21.9221 14.8723 21.671 16.0203 20.8614 16.8284C19.6878 18 17.7989 18 14.021 18H10.014C6.23617 18 4.34725 18 3.17362 16.8284C2 15.6569 2 13.7712 2 10C2 6.22876 2 4.34315 3.17362 3.17157C4.34725 2 6.23617 2 10.014 2H11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M11 15H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 5.5V3C20 3 18.5 2 18.5 2C18.5 2 17 3 15 3V5.5C15 9 18.5 10 18.5 10C18.5 10 22 9 22 5.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
