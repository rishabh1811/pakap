import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
export default function Footer({bg}) {

  var footerClass = "";
  if(!bg){
      footerClass = "container-fluid  p-10 bg-lightBlue"
  } else {
    footerClass = `container-fluid  p-10 ${bg}`
  }
  return (
    <>
      <div
        className={footerClass}
      >
        <h2
          className="text-3xl text-center tracking-wider
                          mb-10"
        >
          RGweb
        </h2>
        <ul
          className="flex flex-col items-center 576:flex-row flex-wrap  justify-center text-lg
                          mb-12 "
        >
         <li className="mx-5 my-2">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mx-5 my-2">
            <Link href="/#pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li className="mx-5 my-2">
            <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="mx-5 my-2">
            <Link href="/services">
                <a>services</a>
              </Link>
            </li>
        </ul>

        {/* <div
          className="flex max-w-[700] mx-auto gap-x-8
                          300:flex-col 300:gap-4  "
        >
          <input
            className="border-b-2  bg-transparent grow
                         focus-visible:border-b-gray-700 outline-none
                         300:text-center"
            placeholder="Enter Your Email"
            type="text"
            name="email"
            id="email"
          />
          <button
            className="text-gray-500 border-b-2 border-gray-700
                                  hover:text-gray-900"
            type="submit"
          >
            Subscribe
          </button>
        </div> */}

        <div
          className="flex max-w-[300px] justify-around mx-auto
                        mt-14 text-gray-500 "
        >
          <button className="h-11 w-11 bg-white hover:text-black transition-colors">
            {" "}
            <FaFacebookF className="mx-auto text-xl" />{" "}
          </button>
          <button className="h-11 w-11 bg-white hover:text-black transition-colors">
            {" "}
            <FaTwitter className="mx-auto text-xl" />
          </button>
          <button className="h-11 w-11 bg-white hover:text-black transition-colors">
            {" "}
            <FaInstagram className="mx-auto text-xl" />
          </button>
          <button className="h-11 w-11 bg-white hover:text-black transition-colors">
            {" "}
            <FaGithub className="mx-auto text-xl" />
          </button>
        </div>
        <p className="mt-14 mb-14 text-gray-500 text-center">
          © 2022 RGweb.in | All Rights Reserved <br />
          Designed with ❤️ by <Link href="/"><a className="underline underline-offset-1">RGweb.in</a></Link>
        </p>

        <ScrollToTopButton />
      </div>
    </>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  const clickHandler = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <button
        className={`w-11 h-11 ml-[100%] text-xl rounded-full 
        bg-black text-white
        hover:bg-zinc-700 hover:duration-300
        transition duration-[.6s]
        fixed bottom-14 right-12 z-10
        ${visible ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"}`}
        onClick={clickHandler}
        // style={{display: visible ? 'inline' : 'none'}}
      >
        <AiOutlineArrowUp className="mx-auto  " />
      </button>
    </>
  );
}

// display: inline;
// position: fixed;
// top: 0;
// right: 0;
// z-index: 100;

// import React from "react";

// export default function Footer() {
//   return (
//     <>
//       <div className="bg-lightBlue">
//           <div className="container py-10 ">
//             <div className="flex flex-col gap-y-8
//                            ">
//                 {/* BOX 1 */}
//               <div className="">
//                 <h2 className="">PAKAP</h2>
//                 <p className="p-gray">
//                   Best solution for your it startup business, consecteturadipiscing
//                   elit. Scelerisque amet odio velit, auctor nam elit nulla.
//                 </p>
//               </div>
//                 {/* BOX 1 */}
//               <div className="">
//                 {/* <h2 className="">Company</h2> */}
//                 <hr className="mb-8"/>
//                 <ul className="flex flex-col
//                                 992:flex-row 992:justify-around">
//                   <li className="p-gray">About Us</li>
//                   <li className="p-gray">Core Services</li>
//                   <li className="p-gray">Refund Policy</li>
//                   <li className="p-gray">FAQ</li>
//                   <li className="p-gray">Reviews</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//       </div>
//     </>
//   );
// }
