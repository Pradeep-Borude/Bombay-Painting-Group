import "../css/animation.css";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const clients = [
  "Reliance Industries",
  "Taj Lands End",
  "Taj Palace",
  "Shankar Mahadevan",
  "Simplex Infrastructure",
  "Siyaram Group",
  "Rolta India",
  "Wadhwani Group",
  "BKT Tyres",
  "Paradise Group",
];

export default function Clients() {
  return (
    <section className="overflow-hidden bg-[#f3f3f1] py-[8vh]">
      <Reveal>
        <div className="w-full flex flex-col items-center py-5">
          <SectionLabel className="text-2xl">
            OUR CLIENTS
          </SectionLabel>

          <h1 className="text-6xl leading-35">
            Spaces Weve Transformed
          </h1>
        </div>
      </Reveal>

      <div className="overflow-hidden">
        <div className="client-track flex w-max">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-8 whitespace-nowrap text-[40px] font-medium"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="client-track-reverse flex w-max">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-8 whitespace-nowrap text-[40px] font-medium"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}