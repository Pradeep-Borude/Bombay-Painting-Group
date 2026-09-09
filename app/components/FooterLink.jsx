"use client";

export default function FooterLink({
  children,
  href = "#",
  delay = 0,
}) {
  const text = children.toString();

  return (
    <a
      href={href}
      className="
        footer-link
        group
        relative
        inline-flex
        h-[22px]
        overflow-hidden
        text-[14px]
        font-medium
        tracking-[0.08em]
        text-white/70
        hover:text-white
      "
      style={{
        "--delay": `${delay}ms`,
      }}
    >
      <span className="flex footer-text">
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