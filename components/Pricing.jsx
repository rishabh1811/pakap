import React from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

export default function Pricing() {
  return (
    <>
      <div className="container py-20">
        <div className="mb-10 576:mb-14">
          <p className="sub-heading">PRICING TABLE</p>
          <h1 className="heading">
            No Hidden Charge Applied, Choose Your Plan
          </h1>
        </div>


        <div className="grid grid-cols-1 gap-5
                        576:grid-cols-2 576:gap-6
                        992:grid-cols-3 ">
    
                {/* CARD */}
            <div className="card border border-[#eee] p-5 shadow-md space-y-2">
              <p className="font-semibold">Basic</p>
              <p className="p-gray">Powerful & awesome elements</p>
              <p className="py-3"><span className="text-5xl font-bold">$39</span> /Month</p>
              <button className="btn">Purchase Plan</button>
              <ul className=" pt-5 space-y-2">
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Up to 10 Website</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Lifetime free Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 10 GB Dedicated Hosting free</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> SEO Optimized</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Live Support</li>
              </ul>
            </div>
    
                {/* CARD */}
            <div className="card border border-[#eee] p-5 shadow-md space-y-2
                            992:scale-105">
              <p className="font-semibold">Basic</p>
              <p className="p-gray">Powerful & awesome elements</p>
              <p className="py-3"><span className="text-5xl font-bold">$39</span> /Month</p>
              <button className="btn">Purchase Plan</button>
              <ul className=" pt-5 space-y-2">
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Up to 10 Website</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Lifetime free Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 10 GB Dedicated Hosting free</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> SEO Optimized</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Live Support</li>
              </ul>
            </div>
    
                {/* CARD */}
            <div className="card border border-[#eee] p-5 shadow-md space-y-2">
              <p className="font-semibold">Basic</p>
              <p className="p-gray">Powerful & awesome elements</p>
              <p className="py-3"><span className="text-5xl font-bold">$39</span> /Month</p>
              <button className="btn">Purchase Plan</button>
              <ul className=" pt-5 space-y-2">
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Up to 10 Website</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Lifetime free Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 10 GB Dedicated Hosting free</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> SEO Optimized</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Live Support</li>
              </ul>
            </div>

        </div>



      </div>
    </>
  );
}
