import AppProgress from "../components/AppProgress";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Features2 from "../components/Features2";
import Footer from "../components/Footer";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import Hero from "../components/Header/Hero";
import Navbar from "../components/Header/Navbar";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <HeaderWrapper>
        <Navbar />
        <Hero />
      </HeaderWrapper>

      <Features />
      <Features2 />
      <AppProgress />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
