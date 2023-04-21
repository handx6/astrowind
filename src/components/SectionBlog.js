import React from 'react'
import CardBlog from './cards/CardBlog';

export default function SectionBlog() {
  return (
    <div className="p-20">
      <div className="flex justify-between">
        <div className="w-1/4">
          <h3 className="text-xl font-semibold">
            Find out more content in our blog
          </h3>
          <a href="" className="pt-2 text-gray-500 text-xs">
            View all posts »
          </a>
        </div>
        <div className="w-1/3">
          <p className=" text-gray-500 text-xs">
            The blog is used to display AstroWind documentation. Each new
            article will be an important step that you will need to know to be
            an expert in creating a website using Astro + Tailwind CSS. Astro is
            a very interesting technology. Thanks.
          </p>
        </div>
      </div>
      <div className="pt-6 flex justify-between flex-wrap gap-2">
        <CardBlog img="img/5.jpg" title="Get started with AstroWind to create a website using Astro and Tailwind CSS" content="Sint sit cillium pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur." />
        <CardBlog img="img/5.jpg" title="Useful tools and resources to create a professionnal website" content="Sint sit cillium pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur." />
        <CardBlog img="img/6.jpg" title="AstroWind template in depth" content="Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas" />
        <CardBlog img="img/7.jpg" title="How to customize AstroWind template to suit your branding" content="Sint sit cillium pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur." />
      </div>
    </div>
  );
}
