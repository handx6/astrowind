import React from "react";
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import CardFeature from "./cards/CardFeature";
import {
  TbBrandTailwind,
  TbComponents,
  TbRocket,
  TbArrowsLeftRight,
} from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { dataCards } from "../data/dataCardFeatures";

export default function SectionFeature() {
  return (
    <>
      <div className="flex justify-center bg-blue-100 items-center space-x-2 p-4">
        <BsInfoSquare />
        <p className="text-sm">
          {" "}
          <span className="font-bold">Philosophy:</span> Simplicity, Best
          Practices and High Perfomance{" "}
        </p>
      </div>
      <div className="py-20 px-20">
        <TitleSection
          title="Features"
          subtitle="What you get with AstroWind"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam veniam soluta itaque fuga? At, in minima."
        />
      </div>
      {/* <div className="flex justify-center pb-20">
        <div className="w-full flex flex-wrap gap-4 items-start px-2 justify-center">
          <div className="w-[45%]">
            <CardFeature
              title="Astro + Tailwind CSS Integration"
              icon={tailwindIcon}
              text="A seamless integration between two great frameworks that offer high productivity, performance and versatility"
            />
            <CardFeature
              title="Ready-to-use Components"
              icon={componentsIcon}
              text="Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blog, Personal Profiles, Small Business..."
            />
            <CardFeature
              title="Best Practices"
              icon={checkListIcon}
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in ducimus ex, dicta dolorem illum dolor vel delectus."
            />
          </div>
          <div className="w-[45%]">
            <CardFeature
              title="Excellent Page Speed"
              icon={rocketIcon}
              text="Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates"
            />
            <CardFeature
              title="Search Engine Optimization (SEO)"
              icon={arrowsIcon}
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in ducimus ex, dicta dolorem illum dolor vel delectus."
            />
            <CardFeature
              title="Open to new ideas and contribution"
              icon={lightbulbIcon}
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae in ducimus ex, dicta dolorem illum dolor vel delectus."
            />
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-2 gap-y-5 px-20 justify-center pb-20">
        {dataCards.map((item, index) => (
          <CardFeature
            key={index}
            title={item.title}
            icon={item.icon}
            text={item.description}
          />
        ))}
      </div>
    </>
  );
}

