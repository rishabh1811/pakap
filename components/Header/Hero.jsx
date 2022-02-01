/* eslint-disable @next/next/no-img-element */
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
            <h1 className="heading ">
              We develop Professional Websites suitable for your business needs
            </h1>
            <p className="p-gray">
              We provide various services like Website Design, Web Development,
              Digital marketing, Logo designing so on. We also provide Ads
              Compaigns on Google Search, Youtube, Instagram.
            </p>
            <button className="btn ">Get Started</button>
          </div>

          <div className="">
            <img src="/images/img1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
