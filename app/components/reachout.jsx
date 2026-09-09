import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Reachout() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-screen">
        <Image
          src="/Images/client-bg-image.webp"
          alt="Client background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-[5] bg-black/50" />

      <div className="relative z-10 flex h-screen w-full items-center justify-center p-[50px] text-white">
        <div className="flex flex-col items-center gap-2 text-center text-6xl">
          <Reveal>
            <SectionLabel className="text-2xl">
              REACH OUT
            </SectionLabel>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="font-medium leading-[1.1]">
              reach out
              <br />
              Let&apos;s create a space that reflects
              <br />
              your vision and enhances the way
              <br />
              you live.
            </h3>
          </Reveal>

          <Reveal delay={300}>
            <button className="py-24 text-2xl">
              <span className="explore-text">
                Let&apos;s Connect
              </span>

              <span className="explore-arrow">
                ↗
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}