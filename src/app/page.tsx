import Navbar from '@/components/common/navbar';
import HeroSection from '@/components/hero';
import Sectors from '@/components/sectors';
import ServicesSection from '@/components/services';
import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <Navbar />
      <HeroSection />
      <Sectors />
      <ServicesSection />
      <div className="h-screen" />
    </div>
  );
}
