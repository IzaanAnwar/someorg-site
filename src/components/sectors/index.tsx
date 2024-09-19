'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs } from '../ui/tabs-animated';
import Image from 'next/image';

const sectors = [
  {
    title: 'Healthcare',
    description:
      'Our comprehensive healthcare cybersecurity services are designed to protect patient data and secure medical systems from a wide array of cyber threats. We ensure that healthcare organizations can maintain compliance, uphold the integrity of sensitive information, and avoid disruptions to critical operations.',
    cta: 'Secure Your Hospital',
    image: '/health.svg',
  },
  {
    title: 'Financial Services',
    description:
      'Our solutions safeguard financial institutions from cyber threats, ensuring the protection of customer assets, secure transactions, and the integrity of financial data. By implementing advanced security protocols, we help organizations minimize financial risks and maintain trust with their clients.',
    cta: 'Protect Your Finances',
    image: 'finance.svg',
  },
  {
    title: 'Public',
    description:
      'We provide customized cybersecurity solutions to protect governmental agencies and public sector entities from targeted cyber-attacks. Our services ensure the confidentiality, security, and availability of critical public infrastructure and sensitive data, promoting stability and service continuity.',
    cta: 'Know More',
    image: 'public.svg',
  },
  {
    title: 'Retail',
    description:
      'Customized security solutions developed to defend retail businesses from cyber threats, ensuring the protection of customer data, financial transactions, and operational integrity.',
    cta: 'Secure Your Business',
    image: 'retail.svg',
  },
  {
    title: 'Energy',
    description:
      'Security solutions focused on protecting the critical infrastructure of the energy sector from cyber threats, maintaining operational stability and safeguarding sensitive data.',
    cta: 'Know more',
    image: '/energy.svg',
  },
];

function Sectors() {
  const tabs: { title: string; value: string; content: React.ReactNode }[] = sectors.map(
    (sector, index) => ({
      title: sector.title,
      value: sector.title,
      content: (
        <div className="w-full overflow-hidden relative h-[80svh] md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#e53259] to-primary space-y-8 flex flex-col justify-center items-center">
          <div className="md:flex md:justify-between items-center md:gap-8 px-4 space-y-4 md:space-y-0">
            <div className="w-full ">
              <Image
                width={600}
                height={400}
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full flex flex-col justify-center h-fit space-y-4   ">
              <h2 className="text-2xl md:text-4xl font-bold">{sector.title} Cyber Security</h2>

              <p className="text-lg font-medium leading-relaxed">{sector.description}</p>
              <motion.div
                className="mt-6 w-fit"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button
                  size={'lg'}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md"
                >
                  {sector.cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    })
  );

  return (
    <div className="h-screen px-4  [perspective:1000px] relative flex space-y-8 flex-col max-w-7xl mx-auto w-full items-start justify-start mt-20 ">
      <div className="space-y-2 mx-auto">
        <h5 className="text-xl md:text-3xl font-bold text-center w-full">Sectors</h5>
        <p className="text-gray-600 mb-12 max-w-5xl mx-auto text-center">
          SomeOrg delivers tailored cybersecurity solutions for industries like finance, healthcare,
          and more. We protect businesses with cutting-edge strategies against evolving threats.
        </p>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Sectors;
