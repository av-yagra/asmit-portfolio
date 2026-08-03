"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import Education from "@/components/Education";
import WhatIDo from "@/components/WhatIDo";
import ToolsOfMyCraft from "@/components/ToolsOfMyCraft";
import SelectedProjects from "@/components/SelectedProjects";
import LeadershipService from "@/components/LeadershipService";
import AwardsAchievements from "@/components/AwardsAchievements";
import EventsExperience from "@/components/EventsExperience";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* Main Portfolio */}
      <main
        className={`bg-[#020617] text-white transition-all duration-1000 ${
          loading
            ? "opacity-0 translate-y-6"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* Hero */}
        <Hero />

        {/* Journey */}
        <WhoAmI />

        {/* Education */}
        <Education />

        {/* What I Do */}
        <WhatIDo />

        {/* Tools */}
        <ToolsOfMyCraft />

        {/* Projects */}
        <SelectedProjects />
        <LeadershipService />
        <AwardsAchievements />
        <EventsExperience />
      </main>
    </>
  );
}