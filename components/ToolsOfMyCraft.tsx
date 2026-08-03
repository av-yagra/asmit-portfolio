const skills = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST API",
      "Socket.IO",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Trello",
      "Vercel",
    ],
  },
  {
    category: "Beyond Technology",
    items: [
      "Research",
      "Technical Writing",
      "Project Management",
      "Leadership",
      "Public Speaking",
      "Problem Solving",
    ],
  },
];

export default function ToolsOfMyCraft() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-32"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.45em] text-sm text-teal-400">
          TOOLS OF MY CRAFT
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white md:text-7xl">
          Building with Purpose
        </h2>

        <div className="mt-6 h-1 w-28 rounded-full bg-teal-500"></div>

        <p className="mt-10 max-w-4xl text-2xl italic leading-relaxed text-slate-300">
          The tools I use are constantly evolving, but the desire to learn never stops.
        </p>

        <div className="mt-8
         space-y-16">
          {skills.map((section) => (
            <div key={section.category}>
              <h3 className="mb-6 text-3xl font-semibold text-white">
                {section.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {section.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-lg text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-500/10 hover:text-teal-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.25)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}