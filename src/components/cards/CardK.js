import React from 'react'

export default function CardK({ nbr, title, border}) {
    const classes = "px-8 " + border;
    return (
      <div className={classes}>
        <h3 className="text-[#1C40B0] text-center text-4xl font-bold">{nbr}</h3>
        <h4 className="uppercase text-gray-500 text-center text-[10px]">{title}</h4>
      </div>
    );
}
