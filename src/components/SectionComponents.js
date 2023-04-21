import React from "react";
import TitleSection from "./TitleSection";
import CardComponent from "./cards/CardComponent";
import "../App.css";
import { dataCardComponent } from "../data/dataCardComponent";

export default function SectionComponents() {
  return (
    <div className="px-20 pt-20 divided-bg">
      <TitleSection
        title="components"
        subtitle="Most used widgets"
        description="Provides frequently used components for building websites using Tailwind CSS"
      />
      <div className="pt-10 grid grid-cols-3 gap-4 ">
        {dataCardComponent.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            ficon={item.ficon}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
