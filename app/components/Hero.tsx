"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Button from "./Button";

const heroContent = {
  title: "WTF",
  subtitle: "We Tell Facts",
  description:
    "Revolutionary training platform that provides accurate, verified information through advanced scanning technology.",
  primaryCTA: {
    text: "Join the waitlist",
    href: "#waitlist",
  },
  smartphone: {
    src: "/Images/landingmain.png",
    alt: "WTF App on Smartphone",
    width: 600,
    height: 600,
  },
  background: {
    pattern: "/Images/Subtract.png",
    overlay: "/Images/Group.png",
    alt: "Background pattern",
  },
  arrow: {
    src: "/Images/arrow.png",
    alt: "Scroll down arrow",
    width: 60,
    height: 60,
  },
};

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeParts(targetMs: number): TimeParts {
  const now = Date.now();
  const diffMs = Math.max(0, targetMs - now);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function TimeCell({ label, value }: { label: string; value: number }) {
  const formatted = value.toString().padStart(2, "0");
  return (
    <div className="bg-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center backdrop-blur-md border border-white/20 shadow-inner">
      <div className="text-white text-lg sm:text-2xl font-semibold leading-none">
        <span key={formatted} className="tick-digit block tick-animate">
          {formatted}
        </span>
      </div>
      <div className="text-white/70 text-[10px] sm:text-[12px] mt-1 leading-none">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const targetTime = useMemo(() => {
    // Set your launch target here (UTC). Adjust as needed.
    return new Date("2025-12-31T00:00:00Z").getTime();
  }, []);

  const [time, setTime] = useState<TimeParts>(() => getTimeParts(targetTime));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeParts(targetTime));
    }, 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pb-0 ">
             <div className="absolute inset-0" style={{ marginTop: "30px" }}>
                   <Image
            src={heroContent.background.pattern}
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
       </div>

             <div className="absolute inset-0 w-full h-full">
         <Image
           src={heroContent.background.overlay}
           alt="Background overlay"
           fill
           className="object-cover"
           priority
         />
       </div>

             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 " style={{ marginTop: "20px" }}>
        <div className="flex flex-col items-center text-center">
        <div className="relative flex flex-col items-center text-center mb-16 sm:mb-20 lg:mb-[-20px]">
            {/* WTF Title */}
            <div className="relative z-20 mb-8 sm:mb-12">
              <h1
                className="text-6xl mt-[-60px] sm:text-8xl md:text-9xl lg:text-[200px] font-black text-white bg-[#484AF6] px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 rounded-[35px] inline-block"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: "125.74px",
                  textAlign: "center",
                  width: "555px",
                  height: "210.55px",
                  top: "13px",
                  left: "6px",
                  borderRadius: "25px",
                  opacity: 1,
                }}
              >
                {heroContent.title}
              </h1>
            </div>

            {/* We Tell Facts Subtitle with Frame */}
            <div className="relative inline-block mt-[-58px]">
              <p
                className="text-2xl  mt-10 sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-bold mb-8 sm:mb-12"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 200,
                  fontSize: "151.44px",
                }}
              >
                {heroContent.subtitle}
              </p>

              {/* Blue Frame Lines - Top horizontal line */}
              <span
                aria-hidden
                className="absolute left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-100px] right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-100px] top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px] h-[2px] sm:h-[3px] md:h-[4px] bg-white"
              ></span>

              {/* Blue Frame Lines - Bottom horizontal line */}
              <span
                aria-hidden
                className="absolute left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-100px] right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-100px] bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] h-[2px] sm:h-[3px] md:h-[4px] bg-white"
              ></span>

              {/* Blue Frame Lines - Left vertical line */}
              <span
                aria-hidden
                className="absolute left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-100px] top-[-10px] sm:top-[-15px] md:top-[-20px] lg:top-[-25px] bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] w-[2px] sm:w-[3px] md:w-[4px] bg-white"
              ></span>

              {/* Blue Frame Lines - Right vertical line */}
              <span
                aria-hidden
                className="absolute right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-100px] top-[-10px] sm:top-[-15px] md:top-[-20px] lg:top-[-25px] bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] w-[2px] sm:w-[3px] md:w-[4px] bg-white"
              ></span>

              {/* Corner markers - Top left */}
              <span
                aria-hidden
                className="absolute left-[-50px] sm:left-[-70px] md:left-[-90px] lg:left-[-110px] top-[-25px] sm:top-[-35px] md:top-[-45px] lg:top-[-55px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#484AF6] rounded-sm"
              ></span>

              {/* Corner markers - Top right */}
              <span
                aria-hidden
                className="absolute right-[-50px] sm:right-[-70px] md:right-[-90px] lg:right-[-110px] top-[-25px] sm:top-[-35px] md:top-[-45px] lg:top-[-55px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#484AF6] rounded-sm"
              ></span>

              {/* Corner markers - Bottom left */}
              <span
                aria-hidden
                className="absolute left-[-50px] sm:left-[-70px] md:left-[-90px] lg:left-[-110px] bottom-[-40px] sm:bottom-[-50px] md:bottom-[-60px] lg:bottom-[-70px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#484AF6] rounded-sm"
              ></span>

              {/* Corner markers - Bottom right */}
              <span
                aria-hidden
                className="absolute right-[-50px] sm:right-[-70px] md:right-[-90px] lg:right-[-110px] bottom-[-40px] sm:bottom-[-50px] md:bottom-[-60px] lg:bottom-[-70px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[#484AF6] rounded-sm"
              ></span>
            </div>
          </div>


          <div className="relative">
            <Image
              src={heroContent.smartphone.src}
              alt={heroContent.smartphone.alt}
              width={heroContent.smartphone.width}
              height={heroContent.smartphone.height}
              className="w-64 sm:w-80 md:w-96 lg:w-[600px] xl:w-[800px] 2xl:w-[1047px] h-auto"
              priority
            />

            <div className="hidden md:block mt-20 mr-60 absolute top-4 sm:top-6 md:top-8 lg:top-10 right-[-180px] sm:right-[-240px] md:right-[-300px] lg:right-[-360px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <div className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 text-center">
                Coming Soon
              </div>
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                <TimeCell label="Days" value={time.days} />
                <TimeCell label="Hours" value={time.hours} />
                <TimeCell label="Mins" value={time.minutes} />
                <TimeCell label="Sec" value={time.seconds} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
            <Button
              href={heroContent.primaryCTA.href}
              variant="yellow"
              size="lg"
              className="font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg mb-38"
            >
              {heroContent.primaryCTA.text}
            </Button>
          </div>

          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 right-0 sm:right-2 md:right-4 lg:right-6 z-10 pointer-events-none">
            <Image
              src={heroContent.arrow.src}
              alt={heroContent.arrow.alt}
              width={heroContent.arrow.width}
              height={heroContent.arrow.height}
              className="w-[150px] mr-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] h-auto rotate-[-10deg] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-60 md:h-80 lg:h-72 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
    </section>
)}