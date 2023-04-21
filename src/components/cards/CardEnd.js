import React from 'react'
import Button from '../btn/ButtonWithIcon';
export default function CardEnd({ title, par }) {
  return (
    <div className="py-4 px-8 text-center mx-auto w-1/2 shadow-xl rounded-lg">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="py-4 text-gray-500 text-md font-light">{par}</p>
      <div className="flex justify-center">
        <Button text="text-white" title="Get template" bg="bg-[#1C40B0]" />
      </div>
    </div>
  );
}
