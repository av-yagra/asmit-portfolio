"use client";

import Image from "next/image";

const organizations = [
    {
        logo: "/images/organizations/cfn.jpg",
        role: "President",
        organization: "CFN Nepal (Creation For Nation)",
        duration: "1.5 Years",
        location: "Pokhara, Nepal",
        description:
            "CFN Nepal is a non-governmental organization driven by the motto 'Creation For Nation.' It promotes creativity, integrity, and the identity of Nepali society while empowering communities through meaningful grassroots initiatives.",
        highlight: "Reading Culture Campaign – 2079",
    },

    {
        logo: "/images/organizations/rdi.jpg",
        role: "Information In-charge",
        organization:
            "Research, Development & Innovation (ACS-PNC)",
        duration: "1 Year",
        location: "Pokhara, Nepal",
        description:
            "Research, Development & Innovation is a technical subcommittee of the Association of CSIT Students dedicated to research, innovation, and practical learning for CSIT students.",
        highlight:
            "ACS-RDI Mobile Application • Technical Workshops",
    },

    {
        logo: "/images/organizations/acs.png",
        role: "Secretary",
        organization:
            "Association of CSIT Students (ACS-PNC)",
        duration: "Present",
        location: "Pokhara, Nepal",
        description:
            "A non-political and non-profit student organization committed to supporting, representing, and empowering CSIT students through technical and academic initiatives.",
        highlight:
            "Technical Events • Workshops • Student Leadership",
    },

    {
        logo: "/images/organizations/cfc.jpg",
        role: "Public Relations Lead",
        organization: "Code for Change Pokhara",
        duration: "1 Year",
        location: "Pokhara, Nepal",
        description:
            "A non-profit technology community connecting students and professionals through hackathons, workshops, and collaborative learning.",
        highlight:
            "CODEFEST Hackathon • Technical Workshops",
    },

    {
        logo: "/images/organizations/racpkr.jpg",
        role: "Joint Secretary",
        organization: "Rotaract Club of Pokhara",
        duration: "Present",
        location: "Pokhara, Nepal",
        description:
            "A dynamic international youth organization focused on leadership, fellowship, professional development, and community service.",
        highlight:
            "Nyano Karyakram • Ujyalo Karyakram • रु.१ दान",
    },

    {
        logo: "/images/organizations/redcross.jpg",
        role: "Lifetime Member",
        organization: "Nepal Red Cross Society",
        duration: "Present",
        location: "Nepal",
        description:
            "Nepal's largest humanitarian organization providing disaster response, healthcare, blood services, first aid, and community support.",
        highlight:
            "Blood Donation • First Aid Box Distribution",
    },

    {
        logo: "/images/organizations/aol.jpg",
        role: "Volunteer",
        organization: "The Art of Living",
        duration: "Ongoing",
        location: "Nepal",
        description:
            "A global humanitarian organization promoting stress-free living through yoga, meditation, volunteerism, and spiritual development.",
        highlight:
            "Yoga • Meditation • Stress Management",
    },

    {
        logo: "/images/organizations/asslun.jpg",
        role: "Volunteer",
        organization:
            "Active Social Service and Literary Unit Nepal",
        duration: "Present",
        location: "Nepal",
        description:
            "A registered NGO working for social welfare while promoting Nepali literature, language, and culture through community initiatives.",
        highlight:
            "Social Service • Literary & Cultural Programs",
    },
];

export default function LeadershipService() {
    return (
        <section
            id="leadership"
            className="relative overflow-hidden bg-[#020617] py-32"
        >
            {/* Background */}

            <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl"></div>

            <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-8">

                {/* Heading */}

                <div>

                    <p className="uppercase tracking-[0.45em] text-sm text-teal-400">
                        SERVICE, LEADERSHIP & COMMUNITIES
                    </p>

                    <h2 className="mt-5 text-5xl font-bold text-white lg:text-7xl">
                        Beyond Technology
                    </h2>

                    <div className="mt-6 h-1 w-28 rounded-full bg-teal-500"></div>

                    <p className="mt-10 max-w-6xl text-2xl italic leading-relaxed text-slate-300">
                        Service gave me purpose. Leadership gave me responsibility.
                        Communities gave me a place to grow.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* Vertical Line */}

                    <div className="absolute left-10 top-0 h-full w-[2px] bg-gradient-to-b from-teal-500 via-cyan-400 to-transparent"></div>

                    <div className="space-y-14">

                        {organizations.map((org, index) => (
                            <div
                                key={org.organization}
                                className="relative flex items-start gap-8"
                            >
                                {/* Timeline Dot */}

                                <div className="relative z-10 mt-8 h-6 w-6 rounded-full border-4 border-[#020617] bg-teal-400 shadow-lg shadow-teal-500/50"></div>

                                {/* Card */}

                                <div className="group w-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-teal-400 hover:shadow-[0_30px_80px_rgba(20,184,166,0.15)]">

                                    <div className="flex flex-col gap-8 md:flex-row md:items-center">

                                        {/* Logo */}

                                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-800">
                                            <Image
                                                src={org.logo}
                                                alt={org.organization}
                                                width={70}
                                                height={70}
                                                className="object-contain transition duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}

                                        <div className="flex-1">

                                            <span className="text-sm uppercase tracking-[0.25em] text-teal-400">
                                                {org.role}
                                            </span>

                                            <h3 className="mt-2 text-3xl font-semibold text-white">
                                                {org.organization}
                                            </h3>

                                            <p className="mt-2 text-slate-400">
                                                {org.location} • {org.duration}
                                            </p>

                                            <p className="mt-6 leading-8 text-slate-300">
                                                {org.description}
                                            </p>

                                            <div className="mt-8 inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2 text-sm text-teal-300">
                                                ✦ {org.highlight}
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact */}

                <div className="mt-28">

                    <div className="mb-12">

                        <h3 className="text-4xl font-bold text-white">
                            Impact in Numbers
                        </h3>

                        <p className="mt-4 text-slate-400">
                            A glimpse of the communities, organizations, and journeys that
                            have shaped me beyond technology.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center transition duration-500 hover:-translate-y-1 hover:border-teal-400">

                            <h4 className="text-6xl font-bold text-teal-400">
                                8+
                            </h4>

                            <p className="mt-4 text-lg text-slate-300">
                                Organizations
                            </p>

                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center transition duration-500 hover:-translate-y-1 hover:border-teal-400">

                            <h4 className="text-6xl font-bold text-teal-400">
                                5+
                            </h4>

                            <p className="mt-4 text-lg text-slate-300">
                                Leadership Roles
                            </p>

                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center transition duration-500 hover:-translate-y-1 hover:border-teal-400">

                            <h4 className="text-6xl font-bold text-teal-400">
                                20+
                            </h4>

                            <p className="mt-4 text-lg text-slate-300">
                                Community Programs
                            </p>

                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center transition duration-500 hover:-translate-y-1 hover:border-teal-400">

                            <h4 className="text-6xl font-bold text-teal-400">
                                ∞
                            </h4>

                            <p className="mt-4 text-lg text-slate-300">
                                Passion for Service
                            </p>

                        </div>

                    </div>

                </div>

                {/* Reflection */}

                <div className="mt-28 rounded-[36px] border border-slate-800 bg-gradient-to-r from-slate-900/70 to-slate-900/40 p-12">

                    <h3 className="text-4xl font-bold text-white">
                        A Personal Reflection
                    </h3>

                    <p className="mt-8 max-w-5xl text-xl leading-10 text-slate-300">
                        Every organization has offered me something different. Some taught
                        me how to lead, others taught me how to listen. Some challenged me
                        to innovate, while others reminded me that meaningful change begins
                        with compassion. Together, these communities have shaped not only
                        the person I am today but also the values I carry into every
                        project, every collaboration, and every opportunity to serve.
                    </p>

                </div>

            </div>

        </section>
    );
}