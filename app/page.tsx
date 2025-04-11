import AboutUs from "./components/AboutUs";
import AnalysisResult from "./components/AnalysisResult";
import FaqSection from "./components/Faq";
import FooterComponent from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurFeatures from "./components/OurFeatures";
import OurTeam from "./components/OurTeam";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurFeatures />
      <OurTeam />
      <AnalysisResult />
      <FaqSection />
      <FooterComponent />
    </>
  );
}
