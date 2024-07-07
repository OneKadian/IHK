import FeaturedSection from "./components/Info/FeaturedSection";
import FeaturedSection2 from "./components/Info/FeaturedSection2";
import FeaturedSection3 from "./components/Info/FeaturedSection3";
import SinglePricingTable from "./components/Pricing/SinglePricingTable";
import Features from "./components/Info/Features";
import Footer from "./components/Footer/Footer";
import Frequently from "./components/Important/Frequently.jsx";
import FoundersNote from "./components/Extras/FoundersNote";
import HeroSection from "./components/Important/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <FeaturedSection2 />
      <FeaturedSection3 />
      <Features />
      <SinglePricingTable />
      <FoundersNote />
      <Frequently />
      <Footer />
    </>
  );
}
