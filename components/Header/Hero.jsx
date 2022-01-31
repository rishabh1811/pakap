import React from 'react'

export default function Hero() {
    

    return (
        <>
    <div className="container mt-8 mb-10">

        <div className="flex text-center flex-col
                        992:flex-row 992:items-center 992:text-left ">
            <div className="space-y-5 ">
                <p className="text-[#ED2775] text-sm font-semibold">
                    Get Your 14 Days free trial
                </p>
                <h1 className="heading ">The Revolutionary App That Makes Your Life Easier Than Others</h1>
                <p className="p-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tincidunt eifend odio viverra diam aliquet donec again.</p>
                <button className="btn ">Start Free Trial</button>
            </div>


            <div className="">
                <img src="/images/img1.png" alt="" />
            </div>
        </div>



    </div>       
        </>
    )
}
