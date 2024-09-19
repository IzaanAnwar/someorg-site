import Approach from '@/components/approach';
import Associations from '@/components/associations';
import LatestBlogPosts from '@/components/blogs';
import Navbar from '@/components/common/navbar';
import ContactSection from '@/components/contact';
import FAQSection from '@/components/faq';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero';
import Sectors from '@/components/sectors';
import ServicesSection from '@/components/services';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <Navbar />
      <HeroSection />
      <Sectors />
      <ServicesSection />
      <Approach />
      <Associations />
      <LatestBlogPosts />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
