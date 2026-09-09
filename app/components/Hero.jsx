"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "../css/Hero.css";

const images = [
  "/Images/image03.png",
  "/Images/image20.png",
  "/Images/image21.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning) return;

      setNextImage((currentImage + 1) % images.length);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, isTransitioning]);

  const handleTransitionEnd = () => {
    if (nextImage === null) return;

    setCurrentImage(nextImage);
    setNextImage(null);
    setIsTransitioning(false);
  };

  return (
    <section
      id="hero"
      className="relative h-[1010px] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={images[currentImage]}
          alt="Bombay Painting Group"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {nextImage !== null && (
        <div
          className="hero-image-reveal absolute right-0 top-0 z-[2] h-full overflow-hidden"
          onAnimationEnd={handleTransitionEnd}
        >
          <div className="absolute right-0 top-0 h-full w-screen">
            <Image
              src={images[nextImage]}
              alt="Bombay Painting Group"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 z-[5] h-[60%] w-full bg-gradient-to-b from-transparent via-black/40 to-black" />

      <div className="absolute bottom-0 left-0 z-[10] w-full px-[22px] text-white">
        <div className="absolute bottom-40 left-0 w-full">
          <div className="ml-24 overflow-hidden">
            <p
              className={`w-[23vw] text-[28px] leading-[40px] ${
                loaded
                  ? "hero-text-visible hero-delay-1"
                  : "hero-text-hidden"
              }`}
            >
              Where Precision Meets Premium
              <br />
              Craftsmanship
            </p>
          </div>

          <a
            href="/work"
            className={`explore-link ml-24 mt-[19px] flex w-fit items-center gap-[7px] ${
              loaded
                ? "explore-visible hero-delay-2"
                : "explore-hidden"
            }`}
          >
            <span className="text">Explore Our Work</span>
            <span className="arrow">↗</span>
          </a>

          <div className="overflow-hidden">
            <h1
              className={`py-[18px] text-center text-[208px] font-normal leading-[0.82] tracking-[-4px] ${
                loaded
                  ? "hero-title-visible hero-delay-3"
                  : "hero-title-hidden"
              }`}
            >
              Bombay Paints Grc
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}