import {
  Code2,
  PenTool,
  Search,
  Users,
  Mountain,
  Music,
} from "lucide-react";

const pursuits = [
  {
    title: "Build",
    icon: Code2,
    description:
      "Building meaningful digital experiences through software development, problem solving, and thoughtful design.",
  },
  {
    title: "Write",
    icon: PenTool,
    description:
      "Writing poetry, literature, blogs, reflections, and stories under the pen name Avyagra Asmit.",
  },
  {
    title: "Research",
    icon: Search,
    description:
      "Exploring ideas, questioning assumptions, and learning deeply before creating meaningful solutions.",
  },
  {
    title: "Lead",
    icon: Users,
    description:
      "Leading communities, organizing initiatives, and believing that service creates lasting impact.",
  },
  {
    title: "Explore",
    icon: Mountain,
    description:
      "Finding perspective through mountains, travel, nature, and experiences beyond the classroom.",
  },
  {
    title: "Create",
    icon: Music,
    description:
      "Expressing creativity through music, ideas, and continuous experimentation.",
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="relative overflow-hidden bg-[#020617] py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Heading */}

        <p className="uppercase tracking-[0.45em] text-sm text-teal-400">
          WHAT I DO
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white md:text-7xl">
          Pursuits
        </h2>

        <div className="mt-6 h-1 w-28 rounded-full bg-teal-500"></div>

        <p className="mt-10 max-w-4xl text-2xl italic leading-relaxed text-slate-300">
          The life we create is shaped by the things we choose to pursue.
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pursuits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-teal-500 hover:shadow-[0_20px_60px_rgba(20,184,166,0.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-3xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}