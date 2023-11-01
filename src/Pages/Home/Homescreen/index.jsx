import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
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