import React from "react";
import CardStep from "./cards/CardStep";
import { dataStep } from "../data/dataStep";

export default function SectionDream() {
  
  return (
    <div className="p-20">
      <div className="flex justify-center">
        <div className="flex w-[48%]">
          <div className="">
            <h3 className="text-black text-2xl font-bold pb-6">
              Get your dream website up and running in no time with AstroWind.
            </h3>
            { dataStep.map((item, index) => (
              <CardStep key={index} icon={item.icon} title={item.title} step={item.step} text={item.text}/>
            ))}
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
