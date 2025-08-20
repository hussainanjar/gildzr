import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductsSection />
      <TrustSection />
      <Footer />
    </div>
  );
}