import React from "react";
import {  RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai"
import Form from "../components/Form";
import GradientWrapper from "../components/GradientWrapper";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer"

export default function ContactPage(props) {
  return (
    <>
      <GradientWrapper>
        <div className="text-white">
          <Navbar />
        </div>
        <hr className="border-white opacity-20" />
        <div className="pt-[4.2rem] pb-[3rem] space-y-6">
          <h1 className="heading  text-center text-white">Contact Us</h1>
          <p className="text-white text-center text-sm">Home | Contact Us</p>
        </div>
      </GradientWrapper>

      <section className="container text-center py-8 space-y-3">
        <h2 className="heading">Get in Touch</h2>
        <p className="p-gray">
          The IT industry offers a sea of options, from platforms, programming
          languages methodologies, technologies, tools, and more.
        </p>
      </section>
      <Form />


      <section className="container gradient-wrapper py-20 mt-[60px] 992:mt-[100px] 992:py-20">
        <h1 className="heading font-medium text-white text-center mb-8 992:mb-16">
          Have any question in mind please call or mail us
        </h1>


        <div className="grid gap-4
                        576:grid-cols-2 
                        992:justify-items-center">

          
            <div className="flex flex-col items-center justify-center gap-3 bg-white py-3 h-[230px] 992:w-[340px]">
              <div className="gradient-1 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
                <RiCustomerService2Line className="text-3xl text-white" />
              </div>
              <p className="font-semibold ">Phone Number</p>
              <p className=" ">+918800544810</p>
            </div>
         

            <div className="flex flex-col items-center justify-center gap-3 bg-white py-3 h-[230px] 992:w-[340px]">
              <div className="gradient-3 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
                <AiOutlineMail className="text-3xl text-white" />
              </div>
              <p className="font-semibold ">Email</p>
              <p className=" ">nameisrishabh@gmail.com</p>
            </div>

      

        
        </div>
      </section>

      <Footer />
    </>
  );
}
