"use client";

import Reveal from "./Reveal";

export default function Footer() {
  const navigation = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "OUR WORK",
    "CONTACT",
  ];

  function FooterLink({ children, href = "#" }) {
    const text = children.toString();

    return (
      <a
        href={href}
        className="
          group
          relative
          inline-flex
          h-[22px]
          overflow-hidden
          text-[14px]
          font-medium
          tracking-[0.08em]
          text-white/70
          transition-colors
          duration-300
          hover:text-white
        "
      >
        <span className="flex">
          {text.split("").map((char, index) => (
            <span
              key={`original-${index}`}
              className="
                inline-block
                transition-transform
                duration-500
                ease-[cubic-bezier(0.65,0,0.35,1)]
                group-hover:-translate-y-full
              "
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        <span className="absolute left-0 top-full flex">
          {text.split("").map((char, index) => (
            <span
              key={`duplicate-${index}`}
              className="
                inline-block
                transition-transform
                duration-500
                ease-[cubic-bezier(0.65,0,0.35,1)]
                group-hover:-translate-y-full
              "
              style={{
                transitionDelay: `${index * 20}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </a>
    );
  }

  return (
    <footer className="w-full bg-black px-[5vw] pb-[2vh] pt-[6vh] text-white">
      <div className="flex justify-between">
        <Reveal delay={0}>
          <div className="flex flex-col gap-4 text-[17px] text-white/70">
            <p>info@bombaypaintinggroup.com</p>

            <p>
              Haris Shaikh (+91) 9820314463&nbsp; / &nbsp;9820114463
            </p>

            <p>
              Khira Nagar, S.V Road, Mumbai
            </p>
          </div>
        </Reveal>

        <nav className="flex items-end gap-8">
          {navigation.map((item, index) => (
            <Reveal
              key={item}
              delay={150 + index * 80}
            >
              <FooterLink>{item}</FooterLink>
            </Reveal>
          ))}
        </nav>
      </div>

      <Reveal delay={200}>
        <div className="mt-[7vh] flex gap-8">
          <FooterLink>INSTAGRAM</FooterLink>
          <FooterLink>FACEBOOK</FooterLink>
        </div>
      </Reveal>

      <div className="mt-[8vh] overflow-hidden">
        <Reveal delay={50}>
          <h1
            className="
              whitespace-nowrap
              text-[10.5vw]
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
            "
          >
            Bombay Painting Group
          </h1>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div
          className="
            mt-[10vh]
            flex
            items-center
            justify-between
            text-[13px]
            font-medium
            tracking-[0.08em]
            text-white/60
          "
        >
          <p>
            © 2026 BOMBAY PAINTING GROUP. ALL RIGHTS RESERVED.
            <span className="mx-2">|</span>
            BUZZLINK STUDIOS
          </p>

          <div className="flex gap-8">
            <FooterLink>PRIVACY POLICY</FooterLink>
            <FooterLink>TERMS OF USE</FooterLink>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}