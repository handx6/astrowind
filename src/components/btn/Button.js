import React from 'react'

export default function Button({title}) {
  return (
    <button className="hover:bg-[#C1C1C1] border rounded-full px-5 py-3 text-sm">
      {title}
    </button>
  );
}
