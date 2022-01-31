import { HiMenuAlt2 } from "react-icons/hi";
import Drawer from '@mui/material/Drawer';
import { useState } from "react";


export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="container flex items-center gap-x-4 py-3 992:justify-between">
        <div className="grow 992:grow-0">
          <p className="font-bold">Pakap</p>
        </div>

        <div className="hidden 992:block">
          <ul
            className="flex  gap-x-6 text-base
                           ">

            <li className="">
              <a href="#">About Us</a>
            </li>
            <li className="">
              <a href="#">Store Locations</a>
            </li>
            <li className="">
              <a href="#">Contact</a>
            </li>
            <li className="">
              <a href="#">Support</a>
            </li>
            <li className="">
              <a href="#">Policy</a>
            </li>
            <li className="">
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="">
          <button className="btn text-xs px-3 py-2 
                            992:text-sm 992:font-normal">Get Started</button>
        </div>

        <div className="text-4xl 992:hidden" onClick={() => setVisible(true)}>
          <HiMenuAlt2 />
        </div>
      </div>

      {/* SIDEBAR */}
      <Drawer
        anchor="right"
        open={visible}
        onClose={() => setVisible(false)}>

          
        <div className="">
            <ul className=" space-y-6 p-10 w-[70vw] capitalize text-left mt-6 text-lg
                              sm:w-[50vw] xs:w-[70vw]">
              <li className="">home</li>
              <li className="">shop</li>
              <li className="">products</li>
              <li className="">pages</li>
              <li className="">contact</li>
              <li className="">blog</li>
            </ul>
          </div>
      </Drawer>
    </>
  );
}
