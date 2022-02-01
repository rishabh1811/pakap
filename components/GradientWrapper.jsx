/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GradientWrapper({children}) {
    

    return (
        <div className='gradient-wrapper relative'>
            <img className='absolute ' src="/images/banner.png" alt="banner" />
            {children}
        </div>
    )
}
