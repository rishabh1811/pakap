/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container mt-8 mb-10">
        <div
          className="flex text-center flex-col
                        992:flex-row 992:items-center 992:text-left "
        >
          <div className="space-y-5 ">
            <p className="text-[#ED2775] text-sm font-semibold">
              Professional, Fast and SEO Optimized
            </p>
            <h1 className="heading 992:text-5xl">
              We develop Professional Websites suitable for your business needs
            </h1>
            <p className="p-gray">
              We provide various services like Website Design, Web Development,
              Digital marketing, Logo designing so on. We also provide Ads
              Compaigns on Google Search, Youtube, Instagram.
            </p>
            <button className="btn ">
              <Link href="/contact">
                <a>Get Started</a>
              </Link>
            </button>
          </div>

          <div className="relative">
            {/* <img src="/images/img1.png" alt="website demo" /> */}

            <picture >
              <source srcSet="/images/img1.webp" type="image/webp" />
              <img src="/images/img1.jpg" alt="website demo" />
            </picture>
            
           

            <img
              className="hidden 1200:block absolute bottom-0 right-0 -z-10 animate-moveinbounce"
              src="/images/shape11.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
