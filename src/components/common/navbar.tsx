'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Shield,
  ChevronDown,
  Users,
  Briefcase,
  Phone,
  Lock,
  Eye,
  Code,
  Cloud,
  UserCheck,
  FileCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ServiceItem = {
  name: string;
  href: string;
};

type ServiceCategory = {
  category: string;
  items: ServiceItem[];
};

type NavLink = {
  name: string;
  href: string;
  icon?: React.ElementType;
  dropdown?: NavLink[] | ServiceCategory[];
};

const servicesData: ServiceCategory[] = [
  {
    category: 'PENETRATION TESTING',
    items: [
      { name: 'Web Application Pentest', href: '#web-pentest' },
      { name: 'Mobile Application Pentest', href: '#mobile-pentest' },
      { name: 'Infrastructure Pentest', href: '#infrastructure-pentest' },
      { name: 'ICS/SCADA Pentest', href: '#ics-scada-pentest' },
      { name: 'Internet of Things Pentest', href: '#iot-pentest' },
      { name: 'Wireless Networking Pentest', href: '#wireless-pentest' },
      { name: 'Coronacheck App Pentest', href: '#coronacheck-pentest' },
    ],
  },
  {
    category: 'MONITORING & FORENSICS',
    items: [
      { name: 'Incident Response', href: '#incident-response' },
      { name: 'CVD Program', href: '#cvd-program' },
      { name: 'Detection Engineering', href: '#detection-engineering' },
    ],
  },
  {
    category: 'OTHER SERVICES',
    items: [
      { name: 'Incident Response', href: '#incident-response' },
      { name: 'CVD Program', href: '#cvd-program' },
      { name: 'Detection Engineering', href: '#detection-engineering' },
    ],
  },
];

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services', dropdown: servicesData },
  {
    name: 'Company',
    href: '#company',
    dropdown: [
      { name: 'About Us', href: '#about', icon: Users },
      { name: 'Careers', href: '#careers', icon: Briefcase },
      { name: 'Contact Us', href: '#contact', icon: Phone },
    ],
  },
];

const ServiceDropdown: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className={`absolute -left-32 transform -translate-x-1/2 mt-2 md:w-[48vw] lg:w-[36vw] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
      isScrolled ? 'bg-secondary' : 'bg-white'
    } shadow-lg ring-1 ring-black ring-opacity-5 z-50`}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 py-6">
      {servicesData.map((category, index) => (
        <div key={index} className="space-y-2">
          <h3 className="text-sm font-medium  text-primary">{category.category}</h3>
          <ul className="space-y-1">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a href={item.href} className="block text-sm text-black hover:text-primary">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

const DropdownMenu: React.FC<{ items: NavLink[]; isScrolled: boolean }> = ({
  items,
  isScrolled,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg ${
      isScrolled ? 'bg-secondary' : 'bg-white'
    }`}
  >
    <div className="py-1">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center px-4 py-2 text-sm hover:text-primary text-black"
        >
          {item.icon && <item.icon className="mr-2 h-4 w-4 text-primary" />}
          {item.name}
        </a>
      ))}
    </div>
  </motion.div>
);

const NavItem: React.FC<{ item: NavLink; isScrolled: boolean }> = ({ item, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      <a
        href={item.href}
        className={cn(
          'flex items-center px-3 py-2 rounded-md text-sm font-medium',
          isScrolled ? 'text-primary hover:text-purple-600' : 'text-white hover:text-primary',
          isOpen && 'text-purple-600',
          !isScrolled && isOpen && 'text-primary'
        )}
      >
        {item.name}
        {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </a>
      <AnimatePresence>
        {isOpen &&
          item.dropdown &&
          (item.name === 'Services' ? (
            <ServiceDropdown isScrolled={isScrolled} />
          ) : (
            <DropdownMenu items={item.dropdown as NavLink[]} isScrolled={isScrolled} />
          ))}
      </AnimatePresence>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={'/'} className="block">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">SomOrg</span>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <NavItem key={item.name} item={item} isScrolled={scrolled} />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              className={`${
                scrolled
                  ? 'bg-primary hover:bg-primary/80 text-white'
                  : 'bg-transparent border border-primary hover:bg-primary/30 text-white'
              }`}
            >
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${scrolled ? 'bg-secondary' : 'bg-black/10'}`}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                scrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button
            className={`w-full ${
              scrolled
                ? 'bg-primary hover:bg-primary/80 text-white'
                : 'bg-white hover:bg-white/80 text-primary'
            }`}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
