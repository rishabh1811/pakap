import React from 'react'

export default function Circle({children, gradient}) {
    

    return (
        <div className= {`${gradient} rounded-full w-[60px] h-[60px] 
                        grid place-items-center  p-4 text-3xl text-white
                        justify-center content-center`} >
          {/* <RiPulseLine className="text-3xl text-white" /> */}
          {children}
        </div>
    )
}
