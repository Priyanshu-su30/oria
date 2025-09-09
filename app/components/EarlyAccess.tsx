"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const earlyAccessContent = {
  title: {
    line1: "Get Early",
    line2: "Access",
  },
  description:
    "Be among the first 100 pilots to experience revolutionary training.",
  placeholder: "Enter your email",
  buttons: {
    send: "Send",
    notify: "Notify me",
  },
};

export default function EarlyAccess() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section
      id="early-access"
      className="relative pt-0 pb-2 sm:pb-3 md:pb-4 lg:pb-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-2 sm:mt-3 md:mt-4 lg:mt-6"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 sm:-top-4 md:-top-6 lg:-top-8 w-[98%] sm:w-[96%] md:w-[94%] lg:w-[90%] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[440px] z-0 pointer-events-none">
        <Image
          src="/Images/bg-early-access.png"
          alt="Early access background"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-12 ">

          <div className="absolute inset-0 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[22px] pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-[15%] h-[15%] bg-white pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="relative mr-0 sm:mr-4 md:mr-6 lg:mr-8" style={{ marginTop: "-20px" }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold leading-tight tracking-tighter transform scale-x-110 origin-left">
                <span className="text-gray-900 block">
                  {earlyAccessContent.title.line1}
                </span>
                <span className="text-[#484AF6] block">
                  {earlyAccessContent.title.line2}
                </span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-[560px]">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="pt-2 sm:pt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={earlyAccessContent.placeholder}
                    className="w-full h-12 sm:h-14 px-4 sm:px-6 border border-gray-300 rounded-lg sm:rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#484AF6] hover:bg-[#3A3AE6] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base shadow-md"
                  >
                    {earlyAccessContent.buttons.send}
                  </Button>

                  <Button
                    size="lg"
                    className="bg-[#484AF6] hover:bg-[#3A3AE6] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base shadow-md"
                  >
                    {earlyAccessContent.buttons.notify}
                  </Button>
                </div>
              </form>

              <p className="text-gray-600 text-sm sm:text-base">
                {earlyAccessContent.description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-2 sm:mx-4 md:mx-6 lg:mx-8 max-w-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 whitespace-nowrap animate-marquee will-change-transform">
              {["Blossom", "Volume", "Sitemark", "Hues"].map((name, i) => (
                <span
                  key={`m1-${i}`}
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 font-medium"
                >
                  {name}
                </span>
              ))}
              {["Blossom", "Volume", "Sitemark", "Hues"].map((name, i) => (
                <span
                  key={`m2-${i}`}
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 font-medium"
                  aria-hidden="true"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
