import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import CompaniesTicker from "../components/CompaniesTicker/CompaniesTicker";
import Benefits from "../components/Benefits/Benefits";
import Companies from "../components/Companies/Companies";
import Speakers from "../components/Speakers";
import Institutional from "../components/Institutional/Institutional";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop";

function Landing() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Benefits />
        <Companies />
        <CompaniesTicker />
        <Speakers />
        <Institutional />
        <CTA />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default Landing;
