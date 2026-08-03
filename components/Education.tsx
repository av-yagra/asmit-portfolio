export default function Education() {
  const education = [
    {
      year: "2020",
      title: "Secondary Education Examination (SEE)",
      institution: "Shree Evergreen English Boarding School",
      location: "Putalibazar-13, Syangja",
      result: "GPA 4.0",
      description:
        "My academic foundation was built here, where I learned the importance of discipline, consistency, and perseverance. Completing my SEE with a GPA of 4.0 reflected the dedication and commitment that continue to shape my approach to learning.",
      icon: "🎓",
    },
    {
      year: "2022",
      title: "Higher Secondary (+2 Science)",
      institution: "Prativa Secondary School",
      location: "Palikhechowk, Pokhara",
      result: "GPA 3.10",
      description:
        "Studying science strengthened my analytical thinking and introduced me to a deeper understanding of mathematics, physics, and scientific reasoning. This stage inspired my decision to pursue Computer Science and Information Technology.",
      icon: "🔬",
    },
    {
      year: "2022 – Present",
      title: "Bachelor of Science in Computer Science & Information Technology",
      institution: "Prithvi Narayan Campus",
      location: "Tribhuvan University",
      result: "Currently in 8th Semester",
      description:
        "My undergraduate journey has transformed knowledge into practical experience. Through software development, research, teamwork, and real-world projects, I continue to build both technical expertise and a broader perspective on creating meaningful solutions.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-[#020617] py-32"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <p className="uppercase tracking-[0.4em] text-teal-400 text-sm">
          Education
        </p>

        <h2 className="mt-3 text-5xl md:text-7xl font-semibold text-white">
          A Journey of Learning
        </h2>

        <div className="w-28 h-1 bg-teal-500 rounded-full mt-6"></div>

       <div className="mt-10 ml-24">
  <p className="max-w-5xl text-2xl italic leading-relaxed text-slate-300">
    The value of education lies not in the certificate we receive, but in the
    <span className="whitespace-nowrap"> person we become.</span>
  </p>
</div>

        {/* Timeline */}

        <div className="relative mt-5">

          {/* Center Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-700"></div>

          <div className="space-y-16">

            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-20"
              >

                {/* Circle */}

                <div className="absolute left-0 top-2 h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>

                {/* Card */}

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-8 transition-all duration-300 hover:border-teal-500 hover:-translate-y-2">

                  <span className="text-teal-400 font-medium">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-lg text-slate-300">
                    {item.institution}
                  </p>

                  <p className="text-slate-400">
                    {item.location}
                  </p>

                  <p className="mt-2 text-teal-300 font-medium">
                    {item.result}
                  </p>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}