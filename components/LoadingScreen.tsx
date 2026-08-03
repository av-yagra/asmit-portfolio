"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const greeting = "नमस्ते।";

  const [text, setText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      if (index < greeting.length) {
        setText(greeting.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setShowSubtitle(true);
        }, 400);

        setTimeout(() => {
          setFadeOut(true);
        }, 2400);

        setTimeout(() => {
          onComplete();
        }, 3400);
      }
    }, 170);

    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
      bg-[#020617] transition-all duration-1000
      ${
        fadeOut
          ? "opacity-0 scale-110 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background */}

      <div className="absolute h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-3xl animate-pulse" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative text-center">

        <h1 className="font-serif text-8xl text-white">

          {text}

          <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-teal-400 align-middle"></span>

        </h1>

        <p
          className={`mt-8 uppercase tracking-[0.45em] text-slate-400 transition-all duration-1000
          ${
            showSubtitle
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Welcome to my journey
        </p>

      </div>
    </div>
  );
}