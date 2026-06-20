import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import CompaniesTicker from "../components/CompaniesTicker/CompaniesTicker";
import Benefits from "../components/Benefits/Benefits";
import Profiles from "../components/Profiles/Profiles";
import Process from "../components/Process/Process";
import Companies from "../components/Companies/Companies";
import Institutional from "../components/Institutional/Institutional";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
    <CompaniesTicker/>
      <Benefits />
      <Profiles />
      <Process />
      <Companies />
      <Institutional />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;