import React from 'react'

export default function CardBlog({img, title, content }) {
  return (
    <div className="w-[200px]">
      <div className="w-full pb-2">
        <img
          src={img}
          alt={title}
          className="rounded-sm object-cover  shadow-xl w-[200px] h-[160px]"
        />
      </div>
      <h4 className="text-base font-semibold pt-2">{title}</h4>
      <p className="pt-2 text-gray-500 text-xs font-light">{content}</p>
    </div>
  );
}
