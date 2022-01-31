import {
  RiAwardLine,
  RiFingerprintLine,
  RiSmartphoneLine,
  RiVipDiamondLine,
} from "react-icons/ri";

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
        <p className="font-semibold ">Feature Great</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-2 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiAwardLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-3 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiFingerprintLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="gradient-4 rounded-full w-[60px] h-[60px] grid place-items-center  p-4">
          <RiVipDiamondLine className="text-3xl text-white" />
        </div>
        <p className="font-semibold ">Feature Great</p>
      </div>
    </div>
  );
}


