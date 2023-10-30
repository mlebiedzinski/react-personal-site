import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyPortfolio />
      <AboutMe />
      <Footer />
      {/* 
      <ContactMe />
      <Footer /> */}
    </>
  );
}