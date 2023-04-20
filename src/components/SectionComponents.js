import React from 'react'
import TitleSection from './TitleSection'
import CardComponent from './cards/CardComponent'
import '../App.css';

export default function SectionComponents() {
  return (
    <div className="px-20 pt-20 divided-bg ">
      <TitleSection
        title="components"
        subtitle="Most used widgets"
        description="Provides frequently used components for building websites using Tailwind CSS"
      />
      <div className="pt-10 flex flex-wrap justify-between gap-4 ">
        <CardComponent
          title="Headers"
          ficon="img/fi/header.png"
          content="In general, Headers contain information that makes it easier for visitors to interact with the website."
        />
        <CardComponent
          title="Heros"
          ficon="img/fi/heros.png"
          content="If you want your website to get more than its fair share of visitors, the Hero section needs to be stellar."
        />
        <CardComponent
          title="Features"
          ficon="img/fi/features.png"
          content="Display your product in action and how the features actually create a solution for your target customer."
        />
        <CardComponent
          title="Content"
          ficon="img/fi/content.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <CardComponent
          title="Call-to-Action"
          ficon="img/fi/cta.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <CardComponent
          title="Pricing"
          ficon="img/fi/pricing.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <CardComponent
          title="Testimonial"
          ficon="img/fi/testimonial.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <CardComponent
          title="Contact"
          ficon="img/fi/contact.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <CardComponent
          title="Footers"
          ficon="img/fi/footers.png"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
      </div>
    </div>
  );
}
