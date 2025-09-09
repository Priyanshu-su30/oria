"use client";
import Image from "next/image";
import { useState } from "react";

const keyFeaturesContent = {
  header: "OUR KEY FEATURES",
  title: {
    line1: "Key Features to ",
    line2: "Master ATC",
    line3: "Communication",
  },
  description:
    "Master aviation communication with our advanced training platform designed for real-world scenarios.",
  feature: {
    title: {
      line1: "Real Time Voice",
      line4: "Recognition",
    },
    description:
      "Advanced AI analyzes your speech patterns and provides instant feedback on pronunciation, clarity, and communication effectiveness.",
    icon: "((o))",
  },
  background: {
    src: "/Images/keyFeaturebg.png",
    alt: "Key Features Background",
  },
  mobileImage: {
    src: "/Images/mobilephone2.png",
    alt: "Mobile Phone Scanning Interface",
  },
};

export default function KeyFeatures() {
  const slides = [
    {
      title1: keyFeaturesContent.feature.title.line1,
      title2: keyFeaturesContent.feature.title.line4,
      description: keyFeaturesContent.feature.description,
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
    {
      title1: "Context-Aware",
      title2: "Feedback",
      description:
        "Real‑time coaching adapts to intent and phraseology so you learn the right call at the right moment.",
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
    {
      title1: "Scenario-Based",
      title2: "Training",
      description:
        "Practice realistic ATC exchanges across weather, traffic, and airspace variations to build proficiency.",
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      id="key-features"
      className="relative py-16 sm:py-20 md:py-24 lg:py-30 pb-32 sm:pb-48 md:pb-60 lg:pb-72 bg-white"
    >
      <div className="absolute inset-0">
        <Image
          src={keyFeaturesContent.background.src}
          alt={keyFeaturesContent.background.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            <div className="text-blue-600 text-xs sm:text-sm font-medium uppercase tracking-wider">
              {keyFeaturesContent.header}
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {keyFeaturesContent.title.line1}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                {keyFeaturesContent.title.line2}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                {keyFeaturesContent.title.line3}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 max-w-md">
              {keyFeaturesContent.description}
            </p>
          </div>

          {/* Column 2: Centered Phone Images */}
          <div className="flex justify-center items-center lg:col-span-1 order-first lg:order-none">
            <div className="relative scale-125 md:scale-150 lg:scale-[1.8] pointer-events-none -mb-16 lg:mb-0">
              <Image
                src={keyFeaturesContent.mobileImage.src}
                alt={keyFeaturesContent.mobileImage.alt}
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-1">
            <div className="w-16 h-16 text-gray-100 rounded-full flex items-center justify-center bg-blue-600 text-2xl font-bold">
              
              {`((•))`}
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((s, idx) => (
                  <div key={idx} className="space-y-4 shrink-0 w-full">
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {s.title1}
                      </h3>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {s.title2}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Restyled and moved here */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
