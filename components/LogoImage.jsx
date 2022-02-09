/* eslint-disable @next/next/no-img-element */
// import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function LogoImage({color}) {
  // const router = useRouter()

  // function goToHome() {
  //   router.push("/")
  // }

  return (
    <>
      <div className="">
        <Link href="/"><a >
            <img className="w-[124px] 576:w-[140px] 992:w-[160px] -z-20 inline-block cursor-pointer"
                src={(color == "white")?"/images/logo/logowhite2.png":"/images/logo/vslogo-colored.png"}
                alt="" /></a></Link>
      </div>





      {/* <img className="w-[124px] 576:w-[140px] 992:w-[160px]" src="/images/logo/vslogo-colored.png" alt="" />
      <img className="w-[124px] 576:w-[140px] 992:w-[160px]" src="/images/logo/logowhite2.png" alt="" /> */}
    </>
  );
}
