interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10">
      {/* Image (if provided) */}
      {image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-teal-400">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-sm text-teal-400"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-4">
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition-all hover:border-teal-500/50 hover:text-teal-400"
            >
              View Code
            </a>
          )}

          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-teal-500/50 bg-teal-500/10 px-4 py-2 text-sm text-teal-400 transition-all hover:bg-teal-500/20"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </div>
  );
}
