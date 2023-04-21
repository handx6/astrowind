import React from 'react'

export default function CardFeature({icon, title, text}) {
  return (
    <div className="w-4/5 flex items-start pt-8">
      <div className="pt-1 pr-2">
        {icon}
      </div>
      <div className="">
        <h3 className="font-bold text-base text-black">{title}</h3>
        <p className="text-[#4D5660] text-sm pt-2">{text}</p>
      </div>
    </div>
  );
}
