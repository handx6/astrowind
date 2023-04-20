import React from 'react'
import Button from './btn/Button';
import ButtonWithIcon from "./btn/ButtonWithIcon";

import { HiDownload } from "react-icons/hi";

export default function Hero() {
    let dlIcon = <HiDownload />;
    let title = dlIcon + " Get template";
  return (
    <div className="pt-5 text-center w-4/5 mx-auto">
      <h1 className="text-4xl font-bold">
        Free template for create your website with{" "}
        <span className="text-[#6C29D7]">Astro 2.0</span> + Tailwind CSS
      </h1>
      <p className="pt-2 font-extralight text-[#4D5660] text-sm w-3/4 mx-auto">
        <span className="font-semibold">AstroWind</span> is a free, customizable
        and production-readu template for Astro 2.0 + Tailwind CSS. Suitable for
        Startups, Small Business, Sass Websites, Professionnal Portfolios,
        Marketing Websites, Landing Pages & Blog
      </p>
      <div className="flex justify-center space-x-5 pt-5">
        <ButtonWithIcon title="Get template" bg="bg-[#1C40B0]" text="text-white"></ButtonWithIcon>
        <Button title="Learn More"></Button>
      </div>
      <img src="img/1.png" alt="astronaute" className='max-w-full p-5' />
    </div>
  );
}
