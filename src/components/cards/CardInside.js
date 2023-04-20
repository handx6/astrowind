import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";

export default function CardInside({ title, par }) {
    if (par) {
        return (
        <div className="flex pt-1">
            <BsCheckCircleFill className="pr-2 text-[#1C3EA9] text-[3.75rem]" />
            <div className="pt-5">
            <h5 className="text-sm text-black">{title}</h5>
            <p className="text-xs text-[#4D5660]">{par}</p>
            </div>
        </div>
        );
    } else {
        return (
          <div className="flex pt-5">
            <BsCheckCircleFill className="pr-2 text-[#1C3EA9] text-4xl" />
            <div className="pt-2">
              <h5 className="text-sm text-black">{title}</h5>
            </div>
          </div>
        );
    }
  
}
