/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";
import {
  RiAwardLine,
  RiFingerprintLine,
  RiSmartphoneLine,
  RiVipDiamondLine,
} from "react-icons/ri";

export default function Features2() {
  return (
    <>
      <div
        className="container flex flex-col 
                   992:grid 992:grid-cols-2 gap-12
                   mb-[100px]"
      >
        <Keys />
        <Icons2 />
      </div>
    </>
  );
}

function Keys() {
  return (
    <div className="space-y-3 text-center 992:text-left">
      <p className="sub-heading">KEY FEATURES</p>
      <h1 className="heading">Powerful Solution for your startup</h1>
      <p className="p-gray">
        Wordpress is great for quick website building. But, Wordpress is slow.
        If your website receives huge traffic surge then it becomes slow and
        leads to angry customers. This is bad for business. Also, Google hates
        slow websites and pushes them to next pages.
        <br />
        <br />
        Hence, we build websites with React.Js, the same technology behind
        Facebook, Instagram and Airbnb. We promise excellent score on GTmetrix.
      </p>

      <div className="flex justify-center gap-4 992:pt-4 992:justify-start">
        <button className="btn"><Link href="/contact"><a>Get Started</a></Link></button>
        {/* <button className="underline underline-offset-2">
          See all features
        </button> */}
      </div>
    </div>
  );
}

function Icons2() {
  return (
    <div
      className="grid grid-cols-1 justify-items-center text-center gap-6
                        576:grid-cols-2 992:text-left"
    >
      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-1 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiSmartphoneLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">React.js</p>
        <p className="p-gray">
          We deliver custom designed websites built with React and Next.js. Same
          technology that runs Facebook. React.js provides Speed with
          Reliability
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-2 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiAwardLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Core Web Vitals</p>
        <p className="p-gray">
          Google recommends that your website should pass the core vitals. These
          include LCP, FID and CLS
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-3 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiFingerprintLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Mobile Optimized</p>
        <p className="p-gray">
          According to{" "}
          <a
            className="underline text-gray-800"
            href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india"
          >
            StatsCounter
          </a>
          , 3 out of 4 people browse internet through mobile. Our sites are
          designed to work perfectly on both mobile and desktop
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-4 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiVipDiamondLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Search Engine Optimized</p>
        <p className="p-gray">
          We use specifications provided by Google and Schema.org to provide
          serious SEO advancement.
        </p>
      </div>
    </div>
  );
}
