"use client";

import { useEffect, useState } from "react";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/content/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Logo />

        <nav className="hidden gap-10 lg:flex">
          {navigation.map((item) => {
            const isExternal =
              item.href.startsWith("http") || item.href.endsWith(".pdf");

            return (
              <a
                key={item.title}
                href={item.href}
                {...(isExternal
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="text-slate-300 transition-colors duration-300 hover:text-blue-400"
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}