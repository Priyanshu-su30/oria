import Image from "next/image";
import Button from "./Button";

const aiPoweredContent = {
  header: "NEXT-GEN AVIATION TECH",
  title: {
    line1: "AI-Powered",
    line2: "Communication",
    line3: "Training",
  },
  subtitle: "Neural Speech",
  subtitle2: "Processing",
  description:
    "Advanced AI understands context, accent, and intent in real-time communication",
  supportingText:
    "Revolutionary machine learning algorithms analyze real ATC patterns to create the most realistic training environment ever built.",
  buttons: {
    readMore: "Read More",
    viewAll: "View All",
  },
  image: {
    src: "/Images/aipowered.png",
    alt: "AI-Powered Communication Training",
  },
};

export default function AIPowered() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 top-20">
        <Image
          src="/Images/CTASection.png"
          alt="AI Powered background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 items-center">
          <div className="space-y-6 sm:space-y-8 text-white mt-[-200px]">
            <div className="text-[#484AF6] text-sm font-medium uppercase tracking-wider">
              {aiPoweredContent.header}
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                {aiPoweredContent.title.line1}
              </h2>
              <div className="flex gap-2">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-[#484AF6] flex ">
                  {aiPoweredContent.title.line2}
                </h2>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-black flex ">
                  {aiPoweredContent.title.line3}
                </h2>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black ">
                {aiPoweredContent.subtitle}
              </h3>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black ">
                {aiPoweredContent.subtitle2}
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-black leading-relaxed max-w-2xl">
              {aiPoweredContent.description}
            </p>

            <div className="pt-4">
              <Button
                href="/features/sample-feature"
                size="lg"
                className="bg-indigo-500 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg"
              >
                {aiPoweredContent.buttons.readMore}
              </Button>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 top-12 mt-28">
            <div className="">
              <p className="text-lg text-black leading-relaxed text-right ml-[80px]">
                {aiPoweredContent.supportingText}
              </p>
            </div>

            <div className="relative">
              <Image
                src={aiPoweredContent.image.src}
                alt={aiPoweredContent.image.alt}
                width={680}
                height={520}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>

            <div className="flex justify-end">
              <Button
                href="/features"
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg"
              >
                {aiPoweredContent.buttons.viewAll}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
