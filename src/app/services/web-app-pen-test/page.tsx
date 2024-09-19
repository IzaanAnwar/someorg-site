'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Search, Bug, Lock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicesCard } from '@/components/services';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const services = [
  {
    icon: '/services/pentesting.svg',
    title: 'Vulnerability Assessment',
    description:
      'Comprehensive scanning and analysis to identify security weaknesses in your web applications.',
  },
  {
    icon: '/services/pentesting.svg',
    title: 'Manual Penetration Testing',
    description:
      'Expert security professionals simulate real-world attacks to uncover hidden vulnerabilities.',
  },
  {
    icon: '/services/pentesting.svg',
    title: 'Exploit Development',
    description:
      'Creation of proof-of-concept exploits to demonstrate the impact of identified vulnerabilities.',
  },
  {
    icon: '/services/pentesting.svg',
    title: 'Security Recommendations',
    description: 'Detailed guidance on how to address and mitigate discovered vulnerabilities.',
  },
  {
    icon: '/services/pentesting.svg',
    title: 'Comprehensive Reporting',
    description:
      'Clear, actionable reports tailored for both technical and non-technical stakeholders.',
  },
];

export default function WebAppPentestPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[90svh] flex items-center justify-center">
        <Image
          src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637778.jpg?t=st=1726739066~exp=1726742666~hmac=77d6dbfa1b78655bbc61805efa4b402f7d6bec646336bc4a7c66018b089dd13e&w=1060"
          alt="Web Application Security"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" {...fadeIn}>
            Web Application Penetration Testing
          </motion.h1>
          <motion.p className="text-lg mb-8" {...fadeIn}>
            Uncover vulnerabilities before attackers do
          </motion.p>
          <motion.div
            {...fadeIn}
            className="mx-auto w-fit "
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button
              size="lg"
              className="px-8 py-2 rounded-md  text-white font-bold transition duration-200 hover:bg-primary/10  border-2 border-transparent hover:border-primary "
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...fadeIn}>
            Our Web Application Penetration Testing Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServicesCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-primary">
          <motion.h2 className="text-3xl font-bold mb-4" {...fadeIn}>
            Ready to Secure Your Web Applications?
          </motion.h2>
          <motion.p className="text-xl mb-8" {...fadeIn}>
            Let our experts help you identify and address vulnerabilities before they can be
            exploited.
          </motion.p>
          <motion.div
            {...fadeIn}
            className="mx-auto w-fit "
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link
              href="/#contact"
              className="bg-primary text-white hover:bg-rose-400 font-bold py-3 px-6 rounded-md inline-flex items-center transition duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
