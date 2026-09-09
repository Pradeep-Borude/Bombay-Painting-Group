import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    image: "/Images/project1.webp",
    location: "Mumbai",
  },
  {
    image: "/Images/project2.webp",
    location: "Navi Mumbai",
  },
  {
    image: "/Images/project3.webp",
    location: "Delhi",
  },
  {
    image: "/Images/project4.webp",
    location: "Mumbai",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-[#f3f3f1] px-[5vw] pt-[10vh]">
      <SectionLabel>
        PROJECTS
      </SectionLabel>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 text-xl font-medium">
          <h1 className="text-6xl leading-35">
            Featured Projects
          </h1>
        </div>

        <Reveal delay={50}>
          <h2 className="w-[28vw] text-2xl">
            A curated portfolio of premium residential & commercial
            interior finishes.
          </h2>
        </Reveal>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="grid grid-cols-2 gap-[5.2rem] py-5">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              delay={index * 150}
            >
              <div
                className="
                  group
                  relative
                  h-[75vh]
                  w-[42vw]
                  overflow-hidden
                "
              >
                <Image
                  src={project.image}
                  alt={project.location}
                  fill
                  sizes="50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[25px]
                    left-1/2
                    -translate-x-1/2
                    translate-y-full
                    text-center
                    text-[20px]
                    font-medium
                    text-white
                    opacity-0
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    left-1/9
                  "
                >
                  {project.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={300}>
        <div
          className="
            flex
            w-full
            items-center
            justify-center
            p-15
            text-2xl
          "
        >
          <span className="text">
            View All Projects
          </span>

          <span className="arrow">
            ↗
          </span>
        </div>
      </Reveal>
    </section>
  );
}