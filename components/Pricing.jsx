import Link from "next/link";
import React from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";


export default function Pricing() {
  return (
    <>
      <div className="container py-20" id="pricing">
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
            <div className="card border border-[#eee] p-5 shadow-md space-y-2 992:hover:scale-105 transition duration-300">
              <p className="font-semibold">Basic Plan</p>
              <p className="p-gray">Gets you started.<br /> For small to medium businesses</p>
              <p className="py-3"><span className="text-5xl font-bold">₹2499</span> /Month</p>
              <button className="btn"><Link href="/contact"><a>Purchase Plan</a></Link></button>
              <ul className=" pt-5 space-y-2">
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Free Domain name</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Unlimited Bandwidth</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Professional Email</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> SEO Optimized</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Free SSL</li>
                {/* <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li> */}
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Google Analytics</li>
                <li className=""><RiCheckLine className="inline text-xl text-yellow-400"/> Upto 5 pages</li>
                <li className=""><RiCheckLine className="inline text-xl text-yellow-400"/> Basic Image Optimization</li>
                {/* <li className=""><RiCloseLine className="inline text-xl text-red-500"/> Free CDN</li> */}
              </ul>
            </div>
    
                {/* CARD */}
            <div className="card border border-[#eee] p-5 shadow-md space-y-2
                            992:scale-105 992:hover:scale-110 transition duration-300">
              <p className="font-semibold">Premium Plan</p>
              <p className="p-gray">For Growing startups </p>
              <p className="py-3"><span className="text-5xl font-bold">₹3499</span> /Month</p>
              <button className="btn"><Link href="/contact"><a>Purchase Plan</a></Link></button>
              <ul className=" pt-5 space-y-2">
              <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Free Domain name</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Unlimited Bandwidth</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Professional Email</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> SEO Optimized</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Free SSL</li>
                {/* <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li> */}
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Google Analytics</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Upto 10 pages</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Complete Image Optimization</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Free CDN</li>
              </ul>
            </div>
    
                {/* CARD */}
            <div className="card border border-[#eee] p-5 shadow-md space-y-2 992:hover:scale-105 transition duration-300">
              <p className="font-semibold">Ecommerce Store</p>
              <p className="p-gray">Powerful & awesome elements</p>
              <p className="py-3"><span className="text-5xl font-bold">₹4499</span> /Month</p>
              <button className="btn"><Link href="/contact"><a>Purchase Plan</a></Link></button>
              <ul className=" pt-5 space-y-2">
                <li className="pl-5 pb-2 font-semibold"> Everything in Premium plan plus </li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Content Managment System</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Razorpay Payment gateway</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Admin Dashboard</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> 24/7 Support</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> Google Cloud Functions</li>
                <li className=""><RiCheckLine className="inline text-xl text-green-500"/> and many more...</li>
              </ul>
            </div>

        </div>



      </div>
    </>
  );
}
