/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Svg({color}) {
  return (
    <>
      <img className="w-[124px] 576:w-[140px] 992:w-[160px]" 
      src={(color == "white")?"/images/logo/logowhite2.png":"/images/logo/vslogo-colored.png"} 
      alt="" />
      {/* <img className="w-[124px] 576:w-[140px] 992:w-[160px]" src="/images/logo/vslogo-colored.png" alt="" />
      <img className="w-[124px] 576:w-[140px] 992:w-[160px]" src="/images/logo/logowhite2.png" alt="" /> */}
    </>
  );
}
