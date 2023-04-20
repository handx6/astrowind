import React from 'react'
import TitleSection from './TitleSection'
import CardInside from './cards/CardInside';

export default function SectionInside() {
  return (
    <div className="bg-blue-100 p-20">
      <TitleSection title="Inside template" subtitle="And what's inside? ..." />
      <div className="flex p-20 justify-between items-center">
        <div className="w-[45%]">
          <h3 className="text-lg font-bold text-black">Ad vix debet docendi</h3>
          <p className="pt-1 pb-1 text-black text-sm">
            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam
            regione ut, persius eripuit quo id. Sit te euismod tacimates
          </p>
          <CardInside
            title="Per ei quaeque sensibus"
            par="Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim."
          />
          <CardInside
            title="Cu imperdiet posidonium sed"
            par="Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis."
          />
          <CardInside
            title="Nulla omittam sadipscing mel ne"
            par="At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus."
          />
        </div>
        <div className="w-[45%]">
          <img
            src="img/2.jpg"
            alt="Accessoires qui tombent"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex px-20 justify-between items-center">
        <div className="w-[45%]">
          <img
            src="img/3.jpg"
            alt="Van vw oldschool"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-[45%]">
          <CardInside title="Per ei quaeque sensibus" />
          <CardInside title="Cu imperdiet posidonium sed" />
          <CardInside title="Nulla omittam sadipscing mel ne" />
          <CardInside title="Per ei quaeque sensibus" />
          <CardInside title="Cu imperdiet posidonium sed" />
          <CardInside title="Nulla omittam sadipscing mel ne" />
        </div>
      </div>
    </div>
  );
}
