import { NextSeo } from "next-seo";
import AppProgress from "../components/AppProgress";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Features2 from "../components/Features2";``
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

      {/* seo */}
    <NextSeo
      title="No.1 Web Development company | Website Design company Delhi | RG Web"
      description="Create your custom website with best designers. No.1 Website Development Company in Delhi NCR.
      Free consultation. Website @ ₹2499"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        //url: 'https://www.url.ie/a',
        title: `No.1 Web Development company | Website Design company Delhi`,
        description: `Create your custom website with best designers. No.1 Website Development Company in Delhi NCR.
        Free consultation. Website @ ₹2499 `,
        images: [
          { url: "https://rgweb.in/images/logo/vslogo-colored.png" }
        ],
        site_name: 'Website Design company Delhi | RG Web',
      }}
    />
    {/* /seo */}
    </>
  );
}
