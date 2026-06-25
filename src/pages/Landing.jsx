import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import CompaniesTicker from "../components/CompaniesTicker/CompaniesTicker";
import Benefits from "../components/Benefits/Benefits";
import Process from "../components/Process/Process";
import Companies from "../components/Companies/Companies";
import Institutional from "../components/Institutional/Institutional";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import FederalReach from "../components/FederalReach/FederalReach";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
    <CompaniesTicker/>
      <Benefits />
      <FederalReach />
      <Process />
      <Companies />
      <Institutional />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;