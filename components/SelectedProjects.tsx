import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NepaliBazar",
    description:
      "A high-performance Nepali online shopping platform with real-time inventory, secure payments, and AI-powered product recommendations.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager",
    description:
      "A modern task management application built while exploring Next.js, authentication, and responsive UI design.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hajiri",
    description:
      "A web-based attendance management system developed for educational institutions with reporting and administration features.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    demo: "#",
  },
];

export default function SelectedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] py-32"
    >
      {/* Background */}

      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Heading */}

        <p className="uppercase tracking-[0.45em] text-sm text-teal-400">
          SELECTED PROJECTS
        </p>

        <h2 className="mt-4 text-5xl md:text-7xl font-semibold text-white">
          Featured Work
        </h2>

        <div className="mt-5 h-1 w-28 rounded-full bg-teal-500"></div>

        <p className="mt-6 max-w-4xl text-2xl italic leading-relaxed text-slate-300">
          “Ideas become real when they are built.”
        </p>

        {/* Featured Project */}

        <div className="mt-14">

          <FeaturedProject
            title="WorkEase"
            description="A modern service facilitation platform connecting customers with verified skilled workers through secure authentication, intelligent booking, location-based services, and real-time communication."
            tech={[
              "Next.js",
              "TypeScript",
              "MongoDB",
              "Express.js",
              "Node.js",
              "Socket.IO",
              "Tailwind CSS",
            ]}
            highlights={[
              "Real-time booking",
              "Worker verification",
              "Interactive maps",
              "Authentication",
              "Live notifications",
              "Responsive design",
            ]}
            github="#"
            demo="#"
          />

        </div>

        {/* Other Projects */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

        {/* Bottom Project */}

        <div className="mt-8">

          <ProjectCard
            {...projects[2]}
          />

        </div>

      </div>
    </section>
  );
}