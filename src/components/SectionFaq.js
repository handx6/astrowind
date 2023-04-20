import React from 'react'
import TitleSection from './TitleSection'
import CardFaq from './cards/CardFaq';

export default function SectionFaq() {
  return (
    <div className="p-20">
      <TitleSection
        title="faqs"
        subtitle="Frequently Asked Questions"
        description="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar"
      />
      <div className="flex justify-center flex-wrap gap-4 pt-10">
        <div className="w-2/5">
          <CardFaq
            title="What do I need to start?"
            content="Space, the final frontier. These are the voyages of the starship enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is art of our destiny, but it's actually our duty to future generations."
          />
          <CardFaq
            title="How to install the Astro + Tailwind CSS template ?"
            content="Well, the way to make shows is, they make one show. That show's called a pilot. Then they show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television pograms. Some don't, become nothing. She starred in one of the ones that became nothing."
          />
          <CardFaq
            title="What's something that you don't understand?"
            content="A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear.I didn't even know we were calling him Big Bear."
          />
        </div>
        <div className="w-2/5">
          <CardFaq
            title="What's an example of when you changed your mind?"
            content="Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels."
          />
          <CardFaq
            title="What is something that you would like to try again?"
            content="A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in."
          />
          <CardFaq
            title="If you could only ask one question to each person you meet, what would that question be?"
            content="This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked"
          />
        </div>
      </div>
    </div>
  );
}
