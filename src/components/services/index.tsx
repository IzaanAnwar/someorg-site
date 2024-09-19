'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const serviceCards = [
  {
    title: 'Pentesting',
    description:
      'Pentesting services involve conducting simulated cyber attacks on a system or network to identify vulnerabilities and assess security measures, helping organizations strengthen their defenses against real-world threats.',
    icon: '/services/pentesting.svg',
    link: 'Learn about Pentesting',
  },
  {
    title: 'Security Subscriptions',
    description:
      'Security subscriptions provide a range of packages that include both offensive and defensive security solutions ensuring comprehensive security at a fair price for companies of all sizes.',
    icon: '/services/security.svg',
    link: 'Learn about Security Subscriptions',
  },
  {
    title: 'Security Staffing',
    description:
      'Staffing Services offer the perfect solution to augment your team with skilled security professionals, ensuring robust defense against cyber threats while enhancing operational efficiency.',
    icon: '/retail.svg',
    link: 'Learn about Security Staffing',
  },
];

const otherServices = [
  'Web Application VAPT',
  'Infrastructure VAPT',
  'Mobile App VAPT',
  'Cloud Service VAPT',
  'ICS/SCADA VAPT',
  'IoT VAPT',
  'WiFi VAPT',
  'CoronaCheck VAPT',
];

export default function ServicesSection() {
  return (
    <div
      className="min-h-screen bg-gray-100 py-12 mt-96 md:mt-32 px-4 sm:px-6 lg:px-8"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center  mb-2 text-gray-900">
          <strong className="text-primary">Services</strong> provided by SomOrg
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-5xl mx-auto">
          Explore the range of tailored services offered by SomOrg, designed to secure your digital
          landscape across industries. From healthcare to financial institutions, our expert
          solutions ensure robust protection, seamless operation, and peace of mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <ServicesCard {...service} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Other Services by SomeOrg</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherServices.map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-primary" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-6 w-fit"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button className="bg-primary text-white hover:bg-primary/80">
                  <Link href="/services/web-app-pen-test" className="w-full h-full">
                    View All Services →
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ServicesCard(props: {
  title: string;
  description: string;
  icon: string;
  index?: number;
  link?: string;
}) {
  const index = props.index || 0;
  return (
    <motion.div
      key={props.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <motion.img
            src={props.icon}
            alt={props.title}
            className="w-16 h-16 mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <CardTitle className="text-xl font-semibold">{props.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 mb-4">{props.description}</p>
          {props.link && (
            <Button variant="link">
              <Link href="/services/web-app-pen-test" className="w-full h-full">
                {props.link} →
              </Link>
            </Button>
          )}{' '}
        </CardContent>
      </Card>
    </motion.div>
  );
}
