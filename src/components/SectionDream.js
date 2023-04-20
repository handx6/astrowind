import React from "react";
import CardStep from "./cards/CardStep";
import { BsBoxSeam, BsType, BsCheckLg } from "react-icons/bs";
import { TbPaint } from "react-icons/tb";

export default function SectionDream() {
  const boxIcon = <BsBoxSeam className="text-sm text-[#1D40B0] " />;
  const typeIcon = <BsType className="text-sm text-[#1D40B0] "/>;
  const paintIcon = <TbPaint className="text-sm text-[#1D40B0] "/>;
  const checkIcon = (
    <BsCheckLg className=" text-sm text-white" />
  );
  return (
    <div className="p-20">
      <div className="flex justify-center">
        <div className="flex w-[48%]">
          <div className="">
            <h3 className="text-black text-2xl font-bold pb-6">
              Get your dream website up and running in no time with AstroWind.
            </h3>
            <CardStep
              icon={boxIcon}
              step="Step 1:"
              title="Download"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed
          portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula."
            />
            <CardStep
              icon={typeIcon}
              step="Step 2:"
              title="Add content"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed
          portittior est nibh at nulla."
            />
            <CardStep
              icon={paintIcon}
              step="Step 3:"
              title="Customize styles"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed
          portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus."
            />
            <CardStep icon={checkIcon} step="Ready!" />
          </div>
        </div>
        <div className="w-[45%] pl-10 ">
          <img
            src="img/4.jpg"
            alt="horloge et aquarelles"
            className="rounded-md w-full max-h-[65vh]"
          />
        </div>
      </div>
    </div>
  );
}
