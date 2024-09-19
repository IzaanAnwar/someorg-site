'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Package } from 'lucide-react';

type TabContent = {
  webSec: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  industryAverage: {
    title: string;
    description: string;
    icon: React.ElementType;
  };
};

const tabs = [
  { id: 'quality', label: 'Quality' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'communication', label: 'Communication' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'aftercare', label: 'Aftercare' },
] as const;

const cardContent: Record<(typeof tabs)[number]['id'], TabContent> = {
  quality: {
    webSec: {
      title: 'Tailored Solutions',
      description:
        "Every solution we offer is meticulously tailored to each client's unique needs, ensuring the highest quality and best fit for optimal results.",
      icon: Globe,
    },
    industryAverage: {
      title: 'One-Size-Fits-All',
      description:
        "Many companies in our industry offer pre-packaged solutions that may not fully meet each client's unique needs, which can compromise the overall quality.",
      icon: Package,
    },
  },
  innovation: {
    webSec: {
      title: 'Cutting-Edge Technology',
      description:
        'We constantly innovate and implement the latest security technologies to stay ahead of emerging threats.',
      icon: Globe,
    },
    industryAverage: {
      title: 'Outdated Methods',
      description:
        'Many companies rely on older, less effective security measures that may not address modern cybersecurity challenges.',
      icon: Package,
    },
  },
  communication: {
    webSec: {
      title: 'Clear and Timely Updates',
      description:
        'We provide regular, easy-to-understand updates on your security status and any potential issues.',
      icon: Globe,
    },
    industryAverage: {
      title: 'Infrequent and Technical Reports',
      description:
        'Communication is often sparse and filled with jargon, making it difficult for clients to understand their security posture.',
      icon: Package,
    },
  },
  expertise: {
    webSec: {
      title: 'Specialized Security Experts',
      description:
        'Our team consists of highly trained professionals with expertise in various areas of cybersecurity.',
      icon: Globe,
    },
    industryAverage: {
      title: 'Generalist Approach',
      description:
        'Many companies employ generalists who may lack in-depth knowledge in specific security domains.',
      icon: Package,
    },
  },
  sustainability: {
    webSec: {
      title: 'Long-term Security Strategy',
      description:
        'We develop sustainable security practices that evolve with your business and the threat landscape.',
      icon: Globe,
    },
    industryAverage: {
      title: 'Short-term Fixes',
      description:
        'Often focused on quick fixes rather than comprehensive, long-lasting security solutions.',
      icon: Package,
    },
  },
  aftercare: {
    webSec: {
      title: 'Continuous Support',
      description:
        'We provide ongoing support and guidance to ensure your security measures remain effective over time.',
      icon: Globe,
    },
    industryAverage: {
      title: 'Limited Post-Implementation Support',
      description:
        'Many companies offer minimal support after implementing security measures, leaving clients vulnerable to new threats.',
      icon: Package,
    },
  },
};

export default function CuttingEdgeApproach() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('quality');

  return (
    <div className=" px-4 max-w-7xl mx-auto py-8 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-2 text-center">
        <span className="text-primary">
          <strong>Cutting-Edge</strong>
        </span>{' '}
        Approach
      </h1>
      <p className="text-gray-600 mb-12 max-w-5xl mx-auto text-center">
        Experience unmatched security with our groundbreaking 8-step approach. Our advanced
        techniques and innovative solutions provide unparalleled protection against emerging threats
        and vulnerabilities, taking security to new heights. Revolutionize your security measures
        with us.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 space-y-2">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              className="w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-center hover:bg-primary/5 md:text-left py-2 px-4 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="w-full md:w-3/4 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">SomeOrg</CardTitle>
                </CardHeader>
                <CardContent className="flex items-start space-x-4">
                  {React.createElement(cardContent[activeTab].webSec.icon, {
                    className: 'hidden md:block w-8 h-8 text-primary',
                  })}
                  <div>
                    <h3 className="text-lg font-semibold">{cardContent[activeTab].webSec.title}</h3>
                    <p className="text-gray-600">{cardContent[activeTab].webSec.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-industry`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Industry Average</CardTitle>
                </CardHeader>
                <CardContent className="flex items-start space-x-4">
                  {React.createElement(cardContent[activeTab].industryAverage.icon, {
                    className: 'hidden md:block w-8 h-8 text-gray-400',
                  })}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {cardContent[activeTab].industryAverage.title}
                    </h3>
                    <p className="text-gray-600">
                      {cardContent[activeTab].industryAverage.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
