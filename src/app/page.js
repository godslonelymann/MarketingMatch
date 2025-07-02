import AgencyTypes from "./components/AgencyTypes";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import QuizCTA from "./components/QuizCTA";
import Reviews from "./components/Reviews";
import "./globals.css"

function Home() {
  return (
   
   <>
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <AgencyTypes />
    <Reviews />
    <QuizCTA />
    <FinalCTA />
    <Footer />
   
   </>
   

  );
}

export default Home;