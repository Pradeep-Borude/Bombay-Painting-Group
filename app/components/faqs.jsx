"use client";

import Reveal from "./Reveal";
import { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  const items = [
    {
      title: "How long does a painting project take and what does it cost?",
      description:
        "Every project is different. Timelines and pricing depend on the size, surface condition, scope, materials and finishes selected. A project-specific quotation is provided after assessment.",
    },
    {
      title: "What painting and finishing services do you offer?",
      description:
        "We offer painting, wood polishing, lamination, textures and specialised surface finishes for a range of spaces.",
    },
    {
      title: "Do you provide a site visit before giving a quotation?",
      description:
        "Yes. We assess the site, surfaces and project requirements before preparing a detailed quotation.",
    },
    {
      title: "Do you handle residential and commercial projects?",
      description:
        "Yes. We undertake residential, commercial and hospitality projects across different scales and locations.",
    },
    {
      title: "Do you provide colour, texture and finish samples?",
      description:
        "Yes. Samples can be provided where required to help finalise colours, textures and specialised finishes.",
    },
    {
      title: "Do you undertake projects across India?",
      description:
        "Yes. Bombay Painting Group undertakes projects across India, subject to project scope and requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="flex w-full justify-between border px-[5vw] py-[8vh]">
      <Reveal delay={0}>
        <div className="flex w-[30vw] flex-col gap-8 text-2xl">
          <SectionLabel>
            FAQ
          </SectionLabel>

          <h1 className="text-6xl leading-[1]">
            Frequently
            <br />
            AskedQuestions
          </h1>

          <p className="text-[18px] leading-[1.4]">
            Find quick answers to the most common questions about our services
            and process.
          </p>
        </div>
      </Reveal>

      <Reveal delay={50}>
        <ul className="w-[50vw]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={index}
                className="border-b border-black/20"
              >
                <div className="flex items-center justify-between py-[4vh]">
                  <h3 className="max-w-[90%] text-3xl font-medium">
                    {item.title}
                  </h3>

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center text-[28px]"
                    aria-label={isOpen ? "Close question" : "Open question"}
                  >
                    {isOpen ? "×" : "+"}
                  </button>
                </div>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    ${
                      isOpen
                        ? "max-h-[200px] translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-2 opacity-0"
                    }
                  `}
                >
                  <p className="max-w-[600px] pb-[4vh] pt-2 text-[18px] leading-[1.5] text-black/60">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}