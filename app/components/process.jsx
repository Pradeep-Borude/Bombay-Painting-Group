"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const processes = [
  {
    number: "01",
    title: "Consultation",
    process:
      "We understand your vision, requirements, and expectations to establish a clear direction.",
  },
  {
    number: "02",
    title: "Planning",
    process:
      "Every detail is carefully planned, from materials and finishes to timelines and execution.",
  },
  {
    number: "03",
    title: "Surface Preparation",
    process:
      "Surfaces are thoroughly prepared to create the ideal foundation for a flawless, lasting finish.",
  },
  {
    number: "04",
    title: "Precision Execution",
    process:
      "Every stage is carried out with meticulous attention to detail and refined craftsmanship.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    process:
      "Each detail is inspected to ensure consistency, durability, and exceptional finishing.",
  },
  {
    number: "06",
    title: "Final Handover",
    process:
      "We present the completed project, ensuring your complete satisfaction with the final result.",
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-black px-[5vw] pt-[5vw] text-white">
      <SectionLabel>
        process
      </SectionLabel>

      <Reveal delay={500}>
        <h1 className="text-6xl leading-35">
          Vision To Finish
        </h1>
      </Reveal>

      <div className="flex items-center justify-between">
        <h2 className="w-[32vw] text-2xl">
          A considered process that brings clarity, precision, and
          consistency to every stage, from consultation through final
          handover.
        </h2>

        <Reveal delay={50}>
          <button>
            <span className="text">
              get an estimate
            </span>

            <span className="arrow">
              ↗
            </span>
          </button>
        </Reveal>
      </div>

      <div className="relative mt-[10vh] min-h-[80vh]">
        {processes.map((item, index) => {
          const row = Math.floor(index / 3);
          const column = index % 3;

          const visualColumn =
            row % 2 === 0
              ? column
              : 2 - column;

          return (
            <div
              key={item.number}
              className="absolute w-[30vw]"
              style={{
                left: `${visualColumn * 33.333}%`,
                top: `${row * 50}%`,
              }}
            >
              <Reveal delay={index * 50}>
                <div className="flex text-2xl font-medium">
                  <p className="h-full w-[5vw]">
                    {item.number}
                  </p>

                  <div className="flex h-full w-[16vw] flex-col gap-4">
                    <h1>
                      {item.title}
                    </h1>

                    <p className="p-2 text-sm font-light leading-relaxed text-zinc-400 lg:text-lg">
                      {item.process}
                    </p>
                  </div>

                  <div className="line flex items-center justify-center">
                    <span className="line-span">
                      --------
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}