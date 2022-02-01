/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AppProgress() {
  return (
    <>
      <div className="bg-black">
        <div
          className="container flex flex-col
                       992:grid 992:grid-cols-2 gap-12
                       py-20 
                       "
        >
          <div className="">
            <img src="/images/progress.png" alt="" />
          </div>
          <div
            className="text-center space-y-3
                            992:text-left"
          >
            <p className="sub-heading">FREE ANALYTICS</p>
            <h1 className="heading text-white">
            Understand your audience with Analytics
            </h1>
            <p className="p-gray text-white">
              We provide analytics tools at No Extra Cost. With the help of
              analytics data, you will know your customer&apos;s location, device
              types, time spent on your website etc. This data majorly helps to
              understands what your customers want and what they don&apos;t want.
              <br />
              <br />
              You can set ads compaigns only in regions where your customers are
              situated. This offers huge cost saving and increase in business.
              <br /> <br />A win! win! situation for you and your customers.
            </p>
            <div>
              <button className="btn mt-6">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
