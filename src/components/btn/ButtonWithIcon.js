import React from 'react'
import { HiDownload } from 'react-icons/hi'

export default function Button({title, bg, text}) {
  return (
    <button
      className={`hover:opacity-50 border rounded-full px-5 py-3 text-sm flex items-center ${bg} ${text}`}
    >
      <HiDownload className={`mr-5 ${text}`} />
      {title}
    </button>
  );
}
