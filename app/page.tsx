import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import ProductSection from "./components/ProductSection";
import WhyUsSection from "./components/WhyUsSection";
import OrderSection from "./components/OrderSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-enak-dark">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ProductSection />
      <WhyUsSection />
      <OrderSection />
      <SocialProofSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
