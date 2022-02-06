/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiPulseLine } from "react-icons/ri";
import { BsImages, BsShieldLock } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineFontSize } from "react-icons/ai";
import { FaAdversal } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import Circle from "../components/Circle";
import GradientWrapper from "../components/GradientWrapper";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer"
import Link from "next/link";
import Form from "../components/Form";

export default function Services() {
  return (
    <>
      <GradientWrapper>
        <div className="text-white">
          <Navbar />
        </div>
        <hr className="border-white opacity-20" />
        <div className="pt-[4.2rem] pb-[3rem] space-y-6">
          <h1 className="heading  text-center text-white">Services</h1>
          <p className="text-white text-center text-sm"><Link href="/"><a>Home</a></Link> | Services</p>
        </div>
      </GradientWrapper>

      <div className="container py-20 grid gap-8 576:grid-cols-2 992:grid-cols-3">
        {/* card 1 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-1">
            <BsShieldLock />
          </Circle>
          <h3 className="text-lg font-semibold">Fully Secured</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>

        {/* card 2 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-2">
            <AiOutlineFontSize />
          </Circle>
          <h3 className="text-lg font-semibold">Responsive Ready</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>

        {/* card 3 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-3">
            <FaAdversal />
          </Circle>
          <h3 className="text-lg font-semibold">Ads Campaign</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>

        {/* card 1 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-4">
            <AiOutlineCloud />
          </Circle>
          <h3 className="text-lg font-semibold">Cloud Storage</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>

        {/* card 1 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-1">
            <BiRupee />
          </Circle>
          <h3 className="text-lg font-semibold">Low Pricing</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>

        {/* card 1 */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <Circle gradient="gradient-2">
            <BsImages />
          </Circle>
          <h3 className="text-lg font-semibold">Retina Ready Screen</h3>
          <p className="p-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident.
          </p>
        </div>
      </div>

      <section className="bg-[#F7F7FF]">
        <div className="container py-20">
          <p className="sub-heading"> KEY FEATURES</p>
          <h1 className="heading mb-6 992:mb-24">
            Most Probably Included Best Features Ever
          </h1>

          <div className="mb-7 992:mb-24 992:grid 992:grid-cols-2 gap-8">
            <div className="">
              <h2 className="question">What is SEO ?</h2>
              <p className="answer">
                SEO stands for “search engine optimization.” In simple terms, it
                means the process of improving your site to increase its
                visibility when people search for products or services related
                to your business in Google, Bing, and other search engines.
              </p>
            </div>
            <img src="/images/seo.png" alt="" />
          </div>

          <div className="mb-7 992:mb-24 992:grid 992:grid-cols-2 gap-8 grid-flow-col">
            <div className="order-2">
              <h2 className="question">What is Responsive Web Design(RWD) ?</h2>
              <p className="answer">
                Responsive web design is about creating web pages that look good
                on all devices! A responsive web design will automatically
                adjust for different screen sizes
              </p>
            </div>
            <img src="/images/rwd.png" alt="" />
          </div>

          <div className="mb-7 992:mb-24 992:grid 992:grid-cols-2 gap-8">
            <div>
              <h2 className="question">What is Retina Design ?</h2>
              <p className="answer">
                the creation of a web solution that will display correctly on a
                high-resolution screen enhancing, therefore, the overall user
                experience.
              </p>
            </div>
            <img src="/images/retina.png" alt="" />
          </div>

          <div className="mb-7 992:mb-24 992:grid 992:grid-cols-2 gap-8 grid-flow-col">
            <div className="order-1">
              <h2 className="question">
                Do you provide fully managed Ads Campaign Service ?
              </h2>
              <p className="answer">
                SEO stands for “search engine optimization.” In simple terms, it
                means the process of improving your site to increase its
                visibility when people search for products or services related
                to your business in Google, Bing, and other search engines.
              </p>
            </div>
            <img src="/images/ads.jpg" alt="" />
          </div>

          <div className="mb-7 992:mb-24 992:grid 992:grid-cols-2 gap-8">
            <div>
              <h2 className="question">What is Analytics ?</h2>
              <p className="answer">
                Web analytics is the measurement, collection, analysis, and
                reporting of web data to understand and optimize web usage. In
                simple words, analytics will tell you about user behavior on
                your website.
              </p>
            </div>
            <img src="/images/ga.png" alt="" />
          </div>
        </div>
      </section>


      
      <section className="container text-center py-24 space-y-3">
        <h2 className="heading">Get in Touch</h2>
        <p className="p-gray pb-8">
          The IT industry offers a sea of options, from platforms, programming
          languages methodologies, technologies, tools, and more.
        </p>
      
        <Form />
      </section>

      <Footer />
    </>
  );
}
