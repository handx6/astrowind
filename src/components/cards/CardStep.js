import React from 'react'


export default function CardStep({icon, step, title, text }) {
    if (!text) {
        return (
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#1D40B0] rounded-full p-2">
                {icon}
              </div>
            </div>
            <div className="pl-4 pt-2">
              <h3 className="text-black text-sm">
                <span className="font-bold">{step}</span>
              </h3>
            </div>
          </div>
        );
    }
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center">
        <div className="border-[1px] border-[#1D40B0] rounded-full p-2">
            { icon }
        </div>
        <div className="border-s border-gray-100 h-full w-[1px]"></div>
      </div>
      <div className="pl-4 pt-2">
        <h3 className="text-black text-sm">
          <span className="font-bold">{step}</span> {title}
        </h3>
        <p className="pb-4 text-xs text-[#4D5660] font-light ">{text}</p>
      </div>
    </div>
  );
}
