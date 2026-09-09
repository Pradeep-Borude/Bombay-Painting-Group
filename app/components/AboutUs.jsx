"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Years of Craftsmanship",
  },
  {
    value: 500,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    value: 20,
    suffix: "+",
    label: "Cities Across India",
  },
];

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function AboutUs() {
  return (
    <section className="w-full bg-[#f3f3f1] px-[5vw] py-[150px]">
      <div className="grid grid-cols-[35%_65%]">
        <Reveal>
          <SectionLabel className="mr-2 flex h-[14px] w-[14px] items-center justify-center text-[34px] leading-none">
            ABOUT US
          </SectionLabel>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-6xl font-semibold leading-[1.08] tracking-[-0.03em]">
              A legacy of craftsmanship, refined
              through experience, precision, and an
              enduring commitment to exceptional
              surface finishes.
            </p>
          </Reveal>

          <div className="mt-[110px] grid grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 150}>
                <div>
                  <div className="text-[84px] font-bold leading-none tracking-[-0.04em]">
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      start={true}
                    />
                  </div>

                  <div className="mt-[18px] text-[14px] leading-[1.3] tracking-[0.01em]">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}