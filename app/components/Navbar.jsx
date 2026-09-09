"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      setScrolled(window.scrollY >= hero.offsetHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` p-[6vh] px-8 fixed left-0 top-0 z-50 flex h-[90px] w-full items-center transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="relative flex h-full w-full items-center px-8">

        <div className="absolute left-8 top-1/2 h-[85px] w-[125px] -translate-y-1/2">
          <Image
            src="/Images/logo-black.png"
            alt="Bombay Painting Group"
            fill
            priority
            sizes="125px"
            className={`object-contain transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />

          <Image
            src="/Images/logo-black-red.png"
            alt="Bombay Painting Group"
            fill
            priority
            sizes="125px"
            className={`object-contain transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            scrolled
              ? "pointer-events-none -translate-y-[calc(50%+15px)] opacity-0"
              : "translate-y-[-50%] opacity-100"
          }`}
        >
          <ul className="flex items-center gap-4 text-[26px]">
            <li>
              <a
                href="/"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/work"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                Work
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-1 text-[26px] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            scrolled
              ? "pointer-events-none -translate-y-[calc(50%+15px)] opacity-0"
              : "translate-y-[-50%] opacity-100"
          }`}
        >
          <span>hello@studio.com</span>
          <span>(+91) 801478952</span>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className={`absolute right-8 top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 flex-col items-center justify-center gap-[6px] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            scrolled
              ? "translate-y-[-50%] opacity-100"
              : "pointer-events-none translate-y-[calc(-50%+10px)] opacity-0"
          }`}
        >
          <span className="h-[2px] w-[28px] bg-current" />
          <span className="h-[2px] w-[28px] bg-current" />
          <span className="h-[2px] w-[28px] bg-current" />
        </button>

      </div>
    </nav>
  );
}