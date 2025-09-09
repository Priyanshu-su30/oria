"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const blogContent = {
  header: "BLOG",
  title: {
    line1: "Aviation Training",
    line2: "Blog",
  },
  description:
    "Stay updated with the latest tips, techniques, and insights from aviation professionals and training experts.",
  featuredPost: {
    category: "Safety",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    title: "Common ATC Communication Mistakes and How to Avoid Them",
    summary:
      "Discover the most frequent communication errors pilots make and practical strategies to prevent them in your training.",
    author: "By Michael Rodriguez",
  },
  button: {
    text: "View All",
    href: "#blog",
  },
};

export default function Blog() {
  const slides = [
    {
      image: { src: "/Images/plane.png", alt: "Airplane wing over clouds" },
      post: blogContent.featuredPost,
    },
    {
      image: { src: "/Images/plane.png", alt: "Airplane wing over clouds" },
      post: {
        category: "Training",
        date: "Jan 03, 2025",
        readTime: "5 min read",
        title: "Building Radio Confidence in Busy Class B Airspace",
        summary:
          "Step-by-step techniques to handle fast-paced instructions while maintaining clarity and safety.",
        author: "By Sarah Lee",
      },
    },
    {
      image: { src: "/Images/plane.png", alt: "Airplane wing over clouds" },
      post: {
        category: "Technology",
        date: "Jan 20, 2025",
        readTime: "6 min read",
        title: "How AI Evaluates Phraseology for Better ATC Calls",
        summary:
          "Behind the scenes of acoustic and language models that grade your readbacks and clearances.",
        author: "By David Chen",
      },
    },
  ];
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="blog" className="relative">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 lg:mb-12">
          <div className="space-y-4 sm:space-y-6 lg:flex-1 lg:pr-8 xl:pr-12">
            <div className="text-[#484AF6] text-xs sm:text-sm font-medium uppercase tracking-wider">
              {blogContent.header}
            </div>

            <div className="space-y-2 flex gap-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                {blogContent.title.line1}
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#484AF6]">
                {blogContent.title.line2}
              </h2>
            </div>

            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              {blogContent.description}
            </p>
          </div>

          <div className="mt-6 sm:mt-16 lg:mt-25">
            <Button
              href="/blogs"
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
            >
              {blogContent.button.text}
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start shrink-0 w-full"
              >
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                  <div className="relative flex justify-end space-x-4 -mt-20 z-20">
                    <button
                      onClick={prev}
                      className="w-12 h-12 border-2 border-[#484AF6] rounded-full flex items-center justify-center bg-white text-[#484AF6] hover:bg-[#484AF6] hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-12 h-12 border-2 border-[#484AF6] rounded-full flex items-center justify-center bg-white text-[#484AF6] hover:bg-[#484AF6] hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-6 mt-20 px-8">
                  <div className="flex justify-start">
                    <span className="bg-[#c0c0fa] text-[#5555f6] px-6 py-2 rounded-full text-md font-medium border border-[#5555f6]">
                      {s.post.category}
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 text-gray-600 text-md">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="text-[#484AF6]"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{s.post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{s.post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-Inter font-bold text-gray-900 leading-tight">
                    {s.post.title}
                  </h3>
                  <p className="text-md text-gray-600 leading-relaxed">
                    {s.post.summary}
                  </p>
                  <p className="text-gray-600 font-medium">{s.post.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>

  );
}
