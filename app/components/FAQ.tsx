"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Button from "./Button";

const faqContent = {
  title: {
    line1: "FAQ",
    line2: "s",
  },
  questions: [
    {
      id: 1,
      question: "What is included in the free trial?",
      answer:
        "Our free trial includes full access to all training modules, AI-powered feedback, and mobile app features for 14 days.",
    },
    {
      id: 2,
      question: "How does the AI-powered training work?",
      answer:
        "Our AI analyzes your communication patterns, provides real-time feedback, and adapts training content to your specific needs.",
    },
    {
      id: 3,
      question: "Can I use this for different types of aircraft?",
      answer:
        "Yes, our platform supports training for various aircraft types including commercial, private, and military aviation.",
    },
    {
      id: 4,
      question: "Is there mobile app support?",
      answer:
        "Absolutely! Our mobile app is available for iOS and Android with full offline capabilities and seamless sync.",
    },
    {
      id: 5,
      question: "What support options are available?",
      answer:
        "We offer 24/7 customer support via chat, email, and phone, plus comprehensive documentation and video tutorials.",
    },
  ],
  button: {
    text: "Contact Support",
    href: "#support",
  },
  mobileApp: {
    title: {
      line1: "Join Our Mobile App",
      line2: "Today",
    },
    description:
      "Get the most out of We Tell Facts with our mobile app. Practice anywhere, anytime with offline capabilities and seamless sync across all your devices.",
    placeholder: "Enter your email",
    button: {
      text: "Notify me",
      href: "#notify",
    },
    countdown: {
      title: "App Launch Countdown",
      days: 26,
      hours: 18,
      minutes: 53,
      seconds: 21,
    },
  },
};

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  // Shared countdown target (match Hero)
  const targetTime = useMemo(
    () => new Date("2025-12-31T00:00:00Z").getTime(),
    []
  );
  const getParts = (ms: number) => {
    const now = Date.now();
    const diff = Math.max(0, ms - now);
    const total = Math.floor(diff / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return { days, hours, minutes, seconds };
  };
  const [t, setT] = useState(() => getParts(targetTime));
  useEffect(() => {
    const id = setInterval(() => setT(getParts(targetTime)), 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  const handleQuestionToggle = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <section id="faq" className="relative bg-white pb-25">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:teimage.pngxt-6xl font-bold pb-20">
                <span className="text-gray-900">{faqContent.title.line1}</span>
                <span className="text-[#5B42F3]">{faqContent.title.line2}</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqContent.questions.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => handleQuestionToggle(item.id)}
                    className="w-full flex justify-between items-center text-left py-4 hover:text-[#5B42F3] transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openQuestion === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openQuestion === item.id && (
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button
                href={faqContent.button.href}
                size="lg"
                className="bg-indigo-600 hover:bg-[#5B42F3] font-bold px-8 py-4 rounded-lg text-lg"
              >
                {faqContent.button.text}
              </Button>
            </div>
          </div>

          <div className="relative">
            <p className="text-lg text-gray-600 text-right leading-relaxed mb-6 mr-10 pl-20 pb-20">
              Find answers to commonly asked questions about our platform,
              features, and services. Can&apos;t find what you&apos;re looking
              for?
            </p>
            <div className="relative">
              <div className="relative">
                <Image
                  src="/Images/joinmobileBG2.png"
                  alt="Mobile app background card with cut-out corner"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute inset-0 z-10 p-8 lg:p-10">
                <div className="space-y-8 max-w-full ">
                  <div className="space-y-2 text-left">
                    <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {faqContent.mobileApp.title.line1}
                    </h3>
                    <h3 className="text-4xl sm:text-5xl font-bold text-[#5B42F3]">
                      {faqContent.mobileApp.title.line2}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed text-left mt-[-30px] ">
                    {faqContent.mobileApp.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="mt-[-20px]">
                      <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={faqContent.mobileApp.placeholder}
                            className="w-70 h-12 px-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                            required
                          />
                          <button
                            className="w-30 bg-gray-800 hover:bg-gray-900 px-2 py-3 text-white rounded-xl"
                          >
                            {faqContent.mobileApp.button.text}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Countdown box positioned outside the main card */}
              <div className="p-3 mb-20 mr-15 absolute -bottom-6 -right-6 bg-[#ececff] border border-[#c4c5fa] rounded-2xl max-w-[400px] shadow-lg z-20">
                <h4 className="text-sm text-[#484AF6] mb-3 text-center">
                  {faqContent.mobileApp.countdown.title}
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Days", value: t.days },
                    { label: "Hours", value: t.hours },
                    { label: "Mins", value: t.minutes },
                    { label: "Sec", value: t.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-[#ececff] border border-[#c4c5fa] rounded-lg px-2 py-1 text-center"
                    >
                      <div className="text-lg font-medium text-[#5B42F3]">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] text-gray-600">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
