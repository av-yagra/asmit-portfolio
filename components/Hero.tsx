"use client";

import Image from "next/image";

const principles = [
  "Technology taught me to build.",
  "Literature taught me to feel.",
  "Research taught me to question.",
  "Music taught me to listen.",
  "Spirituality taught me to reflect.",
  "The mountains taught me humility.",
  "People continue to shape my purpose.",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] animate-[fadeIn_1.2s_ease-out]"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] animate-float-slow rounded-full bg-teal-500/15 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] animate-float-reverse rounded-full bg-cyan-500/15 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-8 py-10">
        <div className="w-full">

          {/* Quote */}

          <div className="mb-12">
            <p className="max-w-6xl text-left text-3xl font-light leading-relaxed tracking-wide text-slate-200 lg:text-5xl">
              In a world that moves fast, I choose to remain curious.
            </p>
          </div>

          {/* Main Content */}

          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left */}

            <div className="-mt-8">

              <h1 className="text-6xl font-bold leading-none text-white lg:text-8xl">
                Asmit Bhusal
              </h1>

              <p className="mt-7 text-sm uppercase tracking-[0.45em] text-slate-400">
                Writing under the pen name
              </p>

              <h2 className="mt-3 text-5xl font-medium text-teal-400">
                Avyagra Asmit
              </h2>

              {/* Principles */}

              <div className="mt-8 space-y-3">

                {principles.map((item) => (
                  <p
                    key={item}
                    className="text-2xl leading-snug text-slate-200"
                  >
                    {item}
                  </p>
                ))}

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#journey"
                  className="rounded-full bg-teal-500 px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-teal-400"
                >
                  Explore My Journey →
                </a>

                <a
                  href="#projects"
                  className="rounded-full border border-slate-600 px-10 py-4 text-lg text-slate-200 transition-all duration-300 hover:scale-105 hover:border-teal-400 hover:bg-slate-800"
                >
                  Explore My Work →
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="relative flex justify-center lg:-mt-6">

              {/* Background Text */}

              <h1 className="pointer-events-none absolute -top-16 select-none text-7xl font-bold uppercase tracking-[0.25em] text-white/5">
                AVYAGRA
              </h1>

              {/* Glow */}

              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-blue-500/20 blur-2xl"></div>

              {/* Image */}

              <Image
                src="/images/profile.jpeg"
                alt="Asmit Bhusal"
                width={620}
                height={760}
                priority
                className="relative rounded-[32px] border border-slate-700 object-cover shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-[1.02]"
              />

            </div>

          </div>

          {/* Scroll Indicator */}

          <div className="mt-16 flex justify-center">
            <div className="animate-bounce text-3xl text-slate-500">
              ↓
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}