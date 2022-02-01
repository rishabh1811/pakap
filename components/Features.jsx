import {
  RiAwardLine,
  RiFingerprintLine,
  RiPulseLine,
  RiSmartphoneLine,
  RiVipDiamondLine,
} from "react-icons/ri";
import {GoGlobe} from "react-icons/go"


export default function Features() {
  return (
    <>
      <div className="container flex flex-col mb-[100px]">
        <Icons />
      </div>
    </>
  );
}

function Icons() {
  return (
    <div
      className="grid grid-cols-2 justify-items-center gap-4
                      576:grid-cols-4"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="gradient-1 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiSmartphoneLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Mobile First Design</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-2 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiAwardLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">90+ Lighthouse Score</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-3 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiPulseLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">SEO Optimized</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-4 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <GoGlobe className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Global CDN</p>
      </div>
    </div>
  );
}


