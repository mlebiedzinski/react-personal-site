import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import Navbar from "../Navbar";
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyProjects />
      <AboutMe />
      <Footer />
    </>
  );
}