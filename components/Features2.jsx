import React from "react";
import {
  RiAwardLine,
  RiFingerprintLine,
  RiSmartphoneLine,
  RiVipDiamondLine,
} from "react-icons/ri";

export default function Features2() {
  return (
    <>
      <div
        className="container flex flex-col 
                   992:grid 992:grid-cols-2 gap-12
                   mb-[100px]"
      >
        <Keys />
        <Icons2 />
      </div>
    </>
  );
}

function Keys() {
  return (
    <div className="space-y-3 text-center 992:text-left">
      <p className="sub-heading">KEY FEATURES</p>
      <h1 className="heading">Most Probably Included Best Features Ever</h1>
      <p className="p-gray">
        Cloud based storage for your data backup just log in with your mail
        account from play store and using whatever you want for your business
        purpose orem ipsum dummy text. Never missyour chance its just began.
        Cloud based storage for your data backup just log in with your mail
        account from play store and using whatever you want chance its just
        began.
      </p>

      <div className="flex justify-center gap-4">
        <button className="btn">Start Free Trial</button>
        <button className="underline underline-offset-2">
          See all features
        </button>
      </div>
    </div>
  );
}

function Icons2() {
  return (
    <div
      className="grid grid-cols-1 justify-items-center text-center gap-6
                        576:grid-cols-2 992:text-left"
    >


      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-1 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiSmartphoneLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
        <p className="p-gray">
          Just log in with your mail account from play store and using whatever
          you want for your able business purpose.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-2 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiAwardLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
        <p className="p-gray">
          Just log in with your mail account from play store and using whatever
          you want for your able business purpose.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-3 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiFingerprintLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
        <p className="p-gray">
          Just log in with your mail account from play store and using whatever
          you want for your able business purpose.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 992:items-start">
        <div className="gradient-4 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiVipDiamondLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
        <p className="p-gray">
          Just log in with your mail account from play store and using whatever
          you want for your able business purpose.
        </p>
      </div>
    </div>
  );
}
