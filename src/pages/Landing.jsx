import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import CompaniesTicker from "../components/CompaniesTicker/CompaniesTicker";
import Benefits from "../components/Benefits/Benefits";
import Speakers from "../components/Speakers";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Speakers />
      <CompaniesTicker />
<<<<<<< HEAD
      {/*<Profiles />*/}
      {/*<Process />*/}
      {/*<Companies />*/}
      {/*<Institutional />*/}
      {/*<CTA />*/}
=======
      <CTA />
>>>>>>> 9f04c113b39b22ac28db41cc76df72ca06290c1c
      <Footer />
    </>
  );
}

export default Landing;
