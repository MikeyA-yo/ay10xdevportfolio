"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "motion/react";

const stats = [
  { end: 10, suffix: "+", label: "Projects Shipped" },
  { end: 6, suffix: "+", label: "Languages" },
  { end: 4, suffix: "+", label: "Companies" },
  { end: 50, suffix: "%", label: "Avg. Performance Gain" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full px-10 py-12 border-t border-b border-gray-800">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-4xl md:text-5xl font-bold text-[#D3E97A]">
              {isInView ? (
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              ) : (
                `0${stat.suffix}`
              )}
            </span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
