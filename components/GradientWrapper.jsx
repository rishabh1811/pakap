/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GradientWrapper({children}) {
    

    return (
        // <div className='gradient-wrapper relative'>
        //     <img className='absolute hidden 576:block ' src="/images/banner.png" alt="banner" />
        //     {children}
        // </div>


        <div className='gradient-wrapper relative z-0'>
            <img className='absolute -z-10' src="/images/banner.png" alt="banner" />
            {children}
        </div>
    )
}
