import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NaturalSection from "./components/NaturalSection";
// import StorySection from "./components/StorySection";
import ProductSection from "./components/ProductSection";
// import WhyUsSection from "./components/WhyUsSection";
import OrderSection from "./components/OrderSection";
import FindUsSection from "./components/FindUsSection";
// import SocialProofSection from "./components/SocialProofSection";
// import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-enak-dark">
      <Navbar />
      <HeroSection />
      <NaturalSection />
      {/* <StorySection /> */}
      <ProductSection />
      {/* <WhyUsSection /> */}
      <OrderSection />
      <FindUsSection />
      {/* <SocialProofSection /> */}
      {/* <FAQSection /> */}
      <Footer />
    </main>
  );
}
