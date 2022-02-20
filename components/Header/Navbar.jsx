/* eslint-disable @next/next/no-img-element */
import { HiMenuAlt2 } from "react-icons/hi";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import Link from 'next/link'
import LogoImage from "../LogoImage";


export default function Navbar({color}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="container flex  items-center gap-x-4 py-3 992:justify-between">
        <div className=" grow ">
        <LogoImage color={color}/>
        </div>

        <div className="hidden 992:block">
          <ul
            className="flex  gap-x-10 mr-10 text-base
                           "
          >
            <li className="">
              <Link href="/">
                <a className="hover:text-[#ED2775] hover:underline underline-offset-2">Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/#pricing">
                <a className="hover:text-[#ED2775] hover:underline underline-offset-2">Pricing</a>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a className="hover:text-[#ED2775] hover:underline underline-offset-2">Contact</a>
              </Link>
            </li>
            <li className="">
              <Link href="/services">
                <a className="hover:text-[#ED2775] hover:underline underline-offset-2">Services</a>
              </Link>
            </li>

            {/* <li className="">
              <a href="#">Support</a>
            </li>

            <li className="">
              <a href="#">Policy</a>
            </li>

            <li className="">
              <a href="#">FAQs</a>
            </li> */}
          </ul>
        </div>

        <div className="hidden 576:block">
          <Link href="/contact">
            <a>
              <button
                className="btn text-xs px-3 py-2
                                992:text-sm 992:font-normal"
              >
                Get Started
              </button>
            </a>
          </Link>
        </div>

        <div className="text-4xl 992:hidden cursor-pointer" onClick={() => setVisible(true)}>
          <HiMenuAlt2 />
        </div>
      </div>

      {/* SIDEBAR */}
      <Drawer anchor="right" open={visible} onClose={() => setVisible(false)}>
        <div className="">
          <ul
            className=" space-y-6 p-10 w-[70vw] capitalize text-left mt-6 text-lg
                              sm:w-[50vw] xs:w-[70vw]"
          >
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/#pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li className="">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
