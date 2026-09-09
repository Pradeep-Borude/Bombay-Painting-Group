"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

import Image from "next/image";
import "../css/services.css";

const services = [
  {
    number: "01",
    image: "/Images/service1.webp",
    title: "Painting",
    description:
      "Built on decades of craftsmanship, we create refined finishes that elevate spaces with timeless elegance.",
  },
  {
    number: "02",
    image: "/Images/service2.webp",
    title: "Polishing",
    description:
      "Bringing warmth, richness, and lasting beauty to wood surfaces through premium polishing solutions crafted with precision and care.",
  },
  {
    number: "03",
    image: "/Images/service3.webp",
    title: "Lamination",
    description:
      "Enhancing surfaces with durable, high-quality lamination that provides protection, style, and a refined modern finish.",
  },
  {
    number: "04",
    image: "/Images/service4.webp",
    title: "Bespoke Finishes",
    description:
      "A diverse range of bespoke finishes and surface treatments, thoughtfully executed to complement the material palette, design intent and character of each space.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-black px-[22px] text-white">
      <Reveal delay={0}>
        <div className="pt-[15vh]">
          <div className="flex flex-col w-full items-center gap-4">
            <SectionLabel className="flex items-start text-[14px] font-medium">
              SERVICES
            </SectionLabel>

            <h2 className="text-6xl font-normal leading-[1.08] tracking-[-0.03em]">
              Our Expertise
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.number}
            className="sticky top-0 flex h-screen items-center justify-center"
          >
            <div className="inset-0 bg-black/25 relative h-[80vh] w-[75vw] overflow-hidden rounded-[24px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 h-full p-[50px] content-center text-white bottom-0">
                <div className="text-6xl absolute left-1/2 top-4/7 gap-2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                  <span className="text-7xl font-lg font-bold">
                    {service.number}
                  </span>

                  <h3 className="font-medium leading-none tracking-[-0.04em]">
                    {service.title}
                  </h3>

                  <p className="mt-[24px] max-w-[70vw] text-[23px] leading-[1.8]">
                    {service.description}
                  </p>

                  {index !== services.length - 1 && (
                    <button className="arrow-float mt-[30px] flex h-[100px] w-[100px] items-center justify-center rounded-full border border-white/50 bg-white/10 text-[26px] backdrop-blur-sm">
                      ↓
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}