"use client";

import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Intern",
    organization: "Stellar Tech Lab, Bagar, Kaski",
  },
  {
    title: "Full Stack Developer Intern",
    organization: "MNA Venture, Kathmandu",
  },
  {
    title: "Digital Literacy Trainer",
    organization: "Pokhara Metropolitan City",
  },
];

const events = [
  {
    role: "Coordinator",
    event: "Reading Culture Campaign",
  },
  {
    role: "Organizer",
    event: "Nepal Literature Festival",
  },
  {
    role: "Organizer",
    event: "CodeFest Pokhara",
  },
  {
    role: "Volunteer",
    event: "Microsoft AI Skills Fest",
    organization: "Microsoft",
  },
  {
    role: "Organizer",
    event: "Various Literary Events",
  },
  {
    role: "Organizer & Volunteer",
    event: "Community Service Projects",
  },
];

export default function EventsExperience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20">

          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            JOURNEY
          </p>

          <h2 className="mt-6 font-serif text-6xl font-semibold leading-none lg:text-8xl">
            Events & Experience
          </h2>

          <div className="mt-8 h-1 w-36 rounded-full bg-cyan-400"></div>

          <p className="mt-10 max-w-4xl text-xl italic leading-relaxed text-gray-300">
            "Every experience leaves a story worth telling."
          </p>

        </div>

        {/* Content */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Work Experience */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="mb-8 flex items-center gap-3">

              <Briefcase className="h-6 w-6 text-cyan-400" />

              <h3 className="text-2xl font-semibold text-white">
                Work Experience
              </h3>

            </div>

            <div className="space-y-6">

              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-cyan-400 pl-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-gray-400">
                    {item.organization}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Events */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

            <div className="mb-8 flex items-center gap-3">

              <CalendarDays className="h-6 w-6 text-cyan-400" />

              <h3 className="text-1xl font-semibold text-white">
                Events & Leadership
              </h3>

            </div>

            <div className="space-y-6">

              {events.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-cyan-400 pl-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.role}
                  </h4>

                  <p className="mt-1 text-gray-400">
                    {item.event}
                    {item.organization && (
                      <span className="text-cyan-400">
                        {" • "}
                        {item.organization}
                      </span>
                    )}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}