import React from "react";
import FooterList from "./cards/FooterList";
import {
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
  TbRss,
  TbBrandGithub,
} from "react-icons/tb";
import { footerLists } from "../data/dataFooter";

export default function Footer() {


  return (
    <footer className="pt-10 px-20 border-t border-gray-200">
      <div className="flex justify-between items-start">
        <div className="">
          <h4 className="text-md font-bold">AstroWind</h4>
          <a href="" className="text-xs text-gray-500 font-light">
            Terms Privacy Policy
          </a>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLists.map((item, index) => (
            <FooterList key={index} title={item.title} list={item.list}/>
          ))}
        </div>
      </div>
      <div className="flex justify-between pt-16 pb-5 text-gray-500">
        <div className="text-xs ">
          <p>
            Made by{" "}
            <a href="https://github.com/handx6" className="text-blue-500">
              Martin Nicolas
            </a>{" "}
            All rights reserved
          </p>
        </div>
        <div className="flex space-x-4 text-lg">
          <TbBrandTwitter />
          <TbBrandInstagram />
          <TbBrandFacebook />
          <TbRss />
          <TbBrandGithub />
        </div>
      </div>
    </footer>
  );
}
