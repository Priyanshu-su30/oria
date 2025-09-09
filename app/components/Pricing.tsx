"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const pricingContent = {
  title: {
    line1: "Your",
    line2: "Membership Starts",
    line3: "Here",
  },
  toggle: {
    paid: "Paid",
    free: "Free",
  },
  button: {
    text: "View All",
    href: "/pricing",
  },
  plans: [
    {
      id: 1,
      name: "Starter Plan",
      description: "Early access, special offers, and more just for members",
      price: {
        paid: "$199",
        free: "$0",
      },
      period: "/month",
      buttons: [
        {
          text: "Get Started",
          variant: "outline",
        },
        {
          text: "Read More",
          variant: "primary",
        },
      ],
      background: "dark",
    },
    {
      id: 2,
      name: "Pro Plan",
      description: "Experience more with your membership",
      price: {
        paid: "$499",
        free: "$0",
      },
      period: "/month",
      buttons: [
        {
          text: "Discover more",
          variant: "dark",
        },
        {
          text: "Read More",
          variant: "primary",
        },
      ],
      background: "light",
    },
  ],
};

export default function Pricing() {
  const [isPaid, setIsPaid] = useState(false);

  const getButtonClass = (variant: string) => {
    switch (variant) {
      case "primary":
        return "inline-flex items-center justify-center bg-[#5B42F3] hover:bg-[#5B42F3] text-white font-medium px-6 py-3 rounded-lg";
      case "outline":
        return "inline-flex items-center justify-center bg-white text-[#5B42F3] border border-gray-300 font-medium px-6 py-3 rounded-lg hover:bg-gray-50";
      case "dark":
        return "inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-lg";
      default:
        return "inline-flex items-center justify-center bg-[#5B42F3] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg";
    }
  };

  return (
    <section className="relative py-16 sm:py-24 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Images/membershipSub.png"
          alt="Membership background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col mb-10">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-gray-900">
                {pricingContent.title.line1}
              </span>{" "}
              <span className="text-[#5B42F3]">
                {pricingContent.title.line2}
              </span>
              <br />
              <span className="text-gray-900">
                {pricingContent.title.line3}
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
            <div className="flex-1"></div>

            <div className="text-xl flex items-center border-2 border-black rounded-xl">
              <button
                onClick={() => setIsPaid(false)}
                className={`px-12 py-4 rounded font-medium transition-colors ${
                  !isPaid
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {pricingContent.toggle.free}
              </button>
              <button
                onClick={() => setIsPaid(true)}
                className={`px-12 py-4 rounded font-medium transition-colors ${
                  isPaid
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {pricingContent.toggle.paid}
              </button>
            </div>

            <div className="flex-1 flex justify-end">
              <Button
                href={pricingContent.button.href}
                size="lg"
                className="bg-[#5B42F3] hover:bg-[#5B42F3] text-white font-bold px-8 py-3 rounded-lg"
              >
                {pricingContent.button.text}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {pricingContent.plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-12 shadow-xl relative overflow-hidden min-h-[500px] ${
                plan.background === "dark" ? "text-white" : "text-gray-900 "
              }`}
            >
              {plan.background === "dark" && (
                <div className="absolute inset-0">
                  <Image
                    src="/Images/final1stcard.png"
                    alt="Dark card background"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {plan.background === "light" && (
                <div className="absolute bottom-4 right-4 text-gray-200 text-6xl font-bold opacity-20">
                  ORA
                </div>
              )}

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span
                    className={`inline-block px-6 py-1 rounded-full text-base font-medium ${
                      plan.background === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </span>
                </div>

                <p className="text-center mb-10 text-xl leading-relaxed">
                  {plan.id === 1 ? (
                    <>
                      Early access, special offers, and more
                      <br />
                      just for members
                    </>
                  ) : (
                    plan.description
                  )}
                </p>

                <div className="text-center mb-10">
                  <div className="w-full h-0.5 bg-gray-300 mb-6"></div>
                  <div className="text-6xl sm:text-7xl font-Inter mb-3">
                    {isPaid ? plan.price.paid : plan.price.free}
                    <span className="text-xl opacity-80 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="flex justify-around ml-14">
                  {plan.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={
                        button.text === "Read More"
                          ? `/pricing/${plan.id}`
                          : `/pricing/get-started/${plan.id}`
                      }
                      className={getButtonClass(button.variant)}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 1 ? "bg-[#5B42F3]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
