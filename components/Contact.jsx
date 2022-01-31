/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Contact() {
    

    return (
        <>
            <div className="bg-[#262A37]">
                <div className="container text-white text-center relative py-16 z-0">
                    <p className="">Leave Your Number</p>
                    <h1 className="heading mb-6">We will contact you about your requirements</h1>
                    <input className="rounded-3xl p-3 block mx-auto mb-4 text-black" type="text" name="mobile" id="mobile"  placeholder='Your contact number' />
                    <button className="btn z-10">Request Call</button>
                    <img className="absolute bottom-1 left-1  -z-10" src="/images/dots.png" alt="dots"   />
                </div>
            </div>      
        </>
    )
}
