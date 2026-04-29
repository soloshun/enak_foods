import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "./components/ScrollToTop";

const NaturalSection = dynamic(() => import("./components/NaturalSection"), {
  loading: () => <div className="min-h-screen bg-enak-dark" />,
});

const ProductSection = dynamic(() => import("./components/ProductSection"), {
  loading: () => <div className="min-h-screen bg-enak-dark" />,
});

const OrderSection = dynamic(() => import("./components/OrderSection"), {
  loading: () => <div className="min-h-[60vh] bg-enak-dark" />,
});

const FindUsSection = dynamic(() => import("./components/FindUsSection"), {
  loading: () => <div className="min-h-screen bg-enak-dark" />,
});

const Footer = dynamic(() => import("./components/Footer"));

// Commented-out sections preserved for future use:
// import StorySection from "./components/StorySection";
// import WhyUsSection from "./components/WhyUsSection";
// import SocialProofSection from "./components/SocialProofSection";
// import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main className="bg-enak-dark">
      <Navbar />
      <HeroSection />
      <NaturalSection />
      <ProductSection />
      <OrderSection />
      <FindUsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
