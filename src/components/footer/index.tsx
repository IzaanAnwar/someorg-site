'use client';

import { motion, Variants } from 'framer-motion';
import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary text-rose-100 py-12 text-center md:text-left"
      initial="initial"
      animate="animate"
      variants={{
        animate: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div variants={fadeIn} className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-rose-200">About SomeOrg</h2>
            <p className="mb-4">
              SomeOrg is a premier cybersecurity firm offering a comprehensive range of security
              services for businesses of all sizes. Our mission is to fortify your digital
              infrastructure against modern cyber threats while providing cost-effective, flexible,
              and high-quality solutions.
            </p>
            <div className="flex space-x-4 mx-auto w-fit md:w-full">
              {[Twitter, Facebook, Github, Linkedin, Youtube].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-rose-300 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-4 text-rose-100">Contacts</h3>
            <p>+91 (80) 4567-8901</p>
            <p>contact@SomeOrg.in</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-4 text-rose-100">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: '#blog', text: 'Blog' },
                { href: '#careers', text: 'Careers' },
                { href: '#services/vapt', text: 'VAPT Validation' },
                { href: '#services/malware-scanner', text: 'Malware Scanner' },
                { href: '#contact', text: 'Inquire' },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-rose-300 transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold mb-4 text-rose-200">Solutions & Services</h3>
            <ul className="space-y-2">
              {[
                { href: '#services/pentesting', text: 'Pentesting' },
                { href: '#services/red-teaming', text: 'Red Teaming' },
                { href: '#services/cvd-program', text: 'CVD Program' },
                { href: '#services/security-staffing', text: 'Security Staffing' },
                { href: '#services/phishing-campaign', text: 'Phishing Campaign' },
                { href: '#services/security-subscriptions', text: 'Security Subscriptions' },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-rose-300 transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="mt-8 pt-8 border-t border-rose-800">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 text-rose-200">Location</h3>
            <p>SomeOrg Tower, Cyber City</p>
            <p>Gurugram, Haryana 122002, India</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-8 pt-8 border-t border-rose-800 text-sm">
          <div className="flex flex-wrap justify-between items-center">
            <p>&copy; 2024 SomeOrg. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              {[
                { href: '#privacy-policy', text: 'Privacy Policy' },
                { href: '#terms', text: 'Terms and Conditions' },
                { href: '#complaints', text: 'Complaints Policy' },
                { href: '#disclosure', text: 'Responsible Disclosure' },
              ].map(({ href, text }) => (
                <Link key={href} href={href} className="hover:text-rose-300 transition-colors">
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
