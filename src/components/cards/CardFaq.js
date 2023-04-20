import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";

export default function CardFaq({ title, content}) {
  return (
    <div className='p-3'>
        <div className="flex items-center align-middle">
            <BsArrowDownRight className='text-sm text-blue-700 font-bold'/>
            <h3 className='pl-2 pt-3 pb-3 text-sm font-semibold'>{ title }</h3>
        </div>
        <p className='text-xs text-gray-500 font-light'>{ content }</p>
    </div>
  )
}
