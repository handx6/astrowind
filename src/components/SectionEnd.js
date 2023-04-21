import React from 'react'
import CardK from './cards/CardK'
import CardEnd from './cards/CardEnd';

export default function SectionEnd() {
  return (
    <>
      <div className="pb-20 flex justify-center">
        <CardK nbr="132K" title="downloads" border="border-e border-gray-300" />
        <CardK nbr="24.8K" title="stars" border="border-e border-gray-300" />
        <CardK nbr="10.3K" title="forks" border="border-e border-gray-300" />
        <CardK nbr="48.4K" title="users" border="" />
      </div>
      <div className="pb-20">
        <CardEnd title="Astro + Tailwind CSS" par="Be very surprised by these huge fake numbers you are seeing on this page. Don't waste more time"/>
      </div>
    </>
  );
}
