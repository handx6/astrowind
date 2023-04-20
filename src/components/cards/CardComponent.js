import React from 'react'

export default function CardComponent({ title, ficon, content}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg w-[31%]">
      <div className="flex items-center  pb-2">
        <img src={ficon} alt={title} className="h-[30px]" />
        <h3 className="font-bold pl-3 tex-sm">{title}</h3>
      </div>
      <p className="text-gray-500 text-xs">{content}</p>
    </div>
  );
}
