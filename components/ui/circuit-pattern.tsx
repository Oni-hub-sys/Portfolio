"use client";

import { useTheme } from "next-themes";

export function CircuitPattern() {
  const { theme } = useTheme();
  
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main grid */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Circuit nodes */}
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <circle cx="300" cy="200" r="3" fill="currentColor" />
        <circle cx="500" cy="150" r="3" fill="currentColor" />
        <circle cx="700" cy="300" r="3" fill="currentColor" />
        <circle cx="150" cy="400" r="3" fill="currentColor" />
        <circle cx="250" cy="600" r="3" fill="currentColor" />
        <circle cx="450" cy="700" r="3" fill="currentColor" />
        <circle cx="600" cy="500" r="3" fill="currentColor" />
        <circle cx="800" cy="450" r="3" fill="currentColor" />
        <circle cx="900" cy="600" r="3" fill="currentColor" />
        <circle cx="650" cy="850" r="3" fill="currentColor" />
        <circle cx="400" cy="900" r="3" fill="currentColor" />
        <circle cx="200" cy="800" r="3" fill="currentColor" />

        {/* Circuit lines */}
        <path d="M100,100 L300,200 L500,150 L700,300" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M150,400 L250,600 L450,700 L600,500 L800,450" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M900,600 L650,850 L400,900 L200,800" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M500,150 L450,700" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M300,200 L250,600" stroke="currentColor" fill="none" strokeWidth="1" />
        <path d="M700,300 L600,500" stroke="currentColor" fill="none" strokeWidth="1" />
      </svg>
    </div>
  );
}
