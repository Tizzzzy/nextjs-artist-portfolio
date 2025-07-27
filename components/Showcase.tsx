import * as React from "react";
import { useState } from "react";

// import useDatabase from "../hooks/useDatabase";

import { ImageComponent } from "./ImageComponent";

import { Gallery } from "./Gallery";

export interface ShowcaseProps {
  limit: boolean;
}

// Define a type for your static image data
interface StaticImage {
  url: string;
  label: string;
  description: string;
}

export const Showcase: React.SFC<ShowcaseProps> = (ShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Define your static image data here
  // The 'url' should be relative to the 'public' directory
  const staticImages: StaticImage[] = [
    {
      url: "/images/永恒的瞬间.jpg", // Assuming image1.jpg is in public/images
      label: "Eternal Moments",
      description: "12'' x 16'' acrylic",
    },
    {
      url: "/images/屁股.jpg", // Assuming image2.png is in public/images
      label: "Butt",
      description: "12'' x 16'' acrylic",
    },
    {
      url: "/images/abstract.jpg", // Assuming image2.png is in public/images
      label: "Abstract",
      description: "12'' x 16'' acrylic",
    },
    {
      url: "/images/tina.jpg", // Assuming another-image.webp is in public/images
      label: "Tina",
      description: "12'' x 16'' acrylic",
    },
    {
      url: "/images/坟墓.jpg", // Assuming another-image.webp is in public/images
      label: "Tomb",
      description: "12'' x 16'' acrylic",
    },
    {
      url: "/images/亲密爱人.jpg", // Assuming another-image.webp is in public/images
      label: "Lovers",
      description: "16'' x 20'' acrylic",
    },
    {
      url: "/images/猫猫主义.jpg", // Assuming another-image.webp is in public/images
      label: "Catism",
      description: "16'' x 20'' acrylic",
    },
    {
      url: "/images/泳池尿尿.jpg", // Assuming another-image.webp is in public/images
      label: "Pee in the Pool",
      description: "16'' x 20'' acrylic",
    },
    {
      url: "/images/villanelle.jpg", // Assuming another-image.webp is in public/images
      label: "Villanelle",
      description: "16'' x 20'' acrylic",
    },
    {
      url: "/images/way_of_water.jpg", // Assuming another-image.webp is in public/images
      label: "Way of Water",
      description: "40'' x 40'' acrylic",
    },
    {
      url: "/images/moon.jpg", // Assuming another-image.webp is in public/images
      label: "Moon",
      description: "40'' x 40'' acrylic",
    },
    {
      url: "/images/tree.jpg", // Assuming another-image.webp is in public/images
      label: "Tree",
      description: "16'' x 20'' acrylic",
    },
    {
      url: "/images/three_color.jpg", // Assuming another-image.webp is in public/images
      label: "Abstract",
      description: "16'' x 20'' acrylic",
    },
  ];

  // If you still want to apply the 'limit' prop, you can slice the array
  const imagesToDisplay = ShowcaseProps.limit ? staticImages.slice(0, 3) : staticImages;

  return (
    <>
      <section className="py-8 col-span-10 col-start-2 col-end-12">
        {ShowcaseProps.limit && (
          <div className="flex flex-row items-center my-4">
            <span className="w-full h-0.5 bg-gray-400 mr-4"></span>
            <h1 className="text-4xl font-light text-gray-700">Showcase</h1>
            <span className="w-full h-0.5 bg-gray-400 ml-4"></span>
          </div>
        )}
        <main className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-11/12 lg:w-10/12 mx-auto">
          {imagesToDisplay.map((img: StaticImage, index: number) => { // Use StaticImage type here
            return (
              <ImageComponent
                open={() => {
                  setIsGalleryOpen(true);
                  setCurrentIndex(index);
                }}
                key={index}
                url={img.url}
                label={img.label}
                description={img.description}
              />
            );
          })}
        </main>
      </section>
      {isGalleryOpen && (
        <Gallery
          currentIndex={currentIndex}
          close={() => {
            setIsGalleryOpen(false);
          }}
          list={imagesToDisplay} // Pass the sliced/full list here
        />
      )}
    </>
  );
};