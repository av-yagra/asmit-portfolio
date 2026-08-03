interface FeaturedProjectProps {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export default function FeaturedProject({
  title,
  description,
  tech,
  highlights,
  github,
  demo,
}: FeaturedProjectProps) {
  return (
    <section className="group relative overflow-hidden rounded-[36px] border border-slate-800 bg-slate-900/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-teal-400 hover:shadow-[0_40px_100px_rgba(20,184,166,0.15)]">

      {/* Decorative Glow */}
      <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-3xl transition-all duration-700 group-hover:bg-teal-500/20"></div>

      <div className="grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="relative z-10 p-10 lg:p-16">

          {/* Badge */}

          <span className="inline-flex rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
            Featured Project
          </span>

          {/* Title */}

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            {title}
          </h2>

          {/* Description */}

          <p className="mt-6 text-lg leading-9 text-slate-300">
            {description}
          </p>

          {/* Tech Stack */}

          <div className="mt-10 flex flex-wrap gap-3">

            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm text-slate-300 transition duration-300 hover:border-teal-400 hover:text-teal-300"
              >
                {item}
              </span>
            ))}

          </div>

          {/* Highlights */}

          <div className="mt-12">

            <h3 className="mb-5 text-xl font-semibold text-white">
              Key Features
            </h3>

            <div className="space-y-4">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-400"></div>

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-8 py-4 text-white transition-all duration-300 hover:border-teal-400 hover:bg-slate-800 hover:scale-105"
              >
                GitHub →
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-teal-400 hover:scale-105"
              >
                Live Demo ↗
              </a>
            )}

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center p-8 lg:p-12">

          <div className="relative h-[450px] w-full overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">

            {/* Fake Browser */}

            <div className="flex items-center gap-2 border-b border-slate-700 px-6 py-4">

              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>

            </div>

            {/* Screenshot Placeholder */}

            <div className="flex h-full items-center justify-center text-center">

              <div>

                <div className="text-7xl opacity-30">
                  💻
                </div>

                <p className="mt-6 text-xl text-slate-500">
                  Project Screenshot
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Replace with your actual WorkEase preview
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}