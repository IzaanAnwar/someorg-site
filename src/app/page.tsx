import Navbar from '@/components/common/navbar';
import HeroSection from '@/components/hero';
import Sectors from '@/components/sectors';
import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <Sectors />
      <div className="h-screen" />
    </div>
  );
}
