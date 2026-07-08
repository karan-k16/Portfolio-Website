"use client";

import { useEffect } from "react";

export default function InteractiveDots() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
        root.style.setProperty("--spot-opacity", "1");
        raf = 0;
      });
    };

    const onLeave = () => {
      root.style.setProperty("--spot-opacity", "0");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="dot-spotlight" aria-hidden="true" />;
}
