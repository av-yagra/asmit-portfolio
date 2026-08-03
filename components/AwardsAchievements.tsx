"use client";

import { Award } from "lucide-react";

const achievements = [
  {
    title: "Poet of Prativa",
    organization: "Prativa",
    description:
      "Honoured with the title 'Poet of Prativa' in recognition of excellence in poetry and literary contribution.",
  },
  {
    title: "Top 11 Finalist – The Poet Idol",
    organization: "The Poet Idol",
    description:
      "Recognized among the Top 11 contestants in a national poetry competition.",
  },
  {
    title: "Presidential Recognition Award",
    organization: "Rotaract Club of Pokhara",
    description:
      "Awarded for dedication, service, and outstanding contribution to the club.",
  },
  {
    title: "National Poetry Competition Winner",
    organization: "Login Books",
    description:
      "Winner of the National Poetry Competition organized by Login Books.",
  },
  {
    title: "National Poetry Competition Winner",
    organization: "ENSAS, Dhangadi",
    description:
      "Winner of the National Poetry Competition organized by ENSAS, Dhangadi.",
  },
  {
    title: "Multiple National Poetry Awards",
    organization: "Various Literary Organizations",
    description:
      "Recipient of several awards and recognitions in nationwide poetry competitions across Nepal.",
  },
];

export default function AwardsAchievements() {
  return (
    <section
      id="awards"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20">

          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            ACHIEVEMENTS & RECOGNITION
          </p>

          <h2 className="mt-6 font-serif text-6xl font-semibold leading-none lg:text-8xl">
            Awards &
            Achievements
          </h2>

          <div className="mt-8 h-1 w-36 rounded-full bg-cyan-400"></div>

          <p className="mt-10 max-w-5xl text-xl italic leading-relaxed text-gray-300">
            Success isn't defined by recognition alone, but by the passion,
            perseverance, and purpose behind every achievement.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex items-center gap-3">

                <Award className="h-6 w-6 text-cyan-400" />

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

              </div>

              <p className="mb-4 text-cyan-400">
                {item.organization}
              </p>

              <p className="leading-7 text-gray-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}