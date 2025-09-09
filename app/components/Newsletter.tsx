"use client";
import Image from "next/image";
import Button from "./Button";

const newsletterContent = {
  title: "Subscribe to Our",
  title2: "Newsletter",
  placeholder: "Enter your email",
  button: {
    text: "Subscribe",
    href: "#subscribe",
  },
  image: {
    src: "/Images/qrimg.png",
    alt: "Smartphone scanning product barcode in retail environment",
  },
  background: {
    src: "/Images/subtract3.png",
    alt: "Dark irregular shape background",
  },
};

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section
      id="newsletter"
      className="relative py-14 sm:py-24 overflow-hidden rounded-3xl"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={newsletterContent.image.src}
          alt={newsletterContent.image.alt}
          width={1550}
          height={1500}
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left side content */}
          <div className="absolute left-0 top-0 w-full sm:w-1/2 text-white  py-4 sm:py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extralight leading-tight">
              {newsletterContent.title}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extralight mb-4 sm:mb-6">
              {newsletterContent.title2}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row w-full max-w-xl items-stretch sm:items-start gap-3">
                <input
                  type="email"
                  placeholder={newsletterContent.placeholder}
                  className="flex-1 h-12 sm:h-14 px-4 sm:px-5 bg-white/90 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-7 bg-indigo-600 text-white font-extralight rounded-lg sm:rounded-xl"
                >
                  {newsletterContent.button.text}
                </Button>
              </div>
            </form>
          </div>

       
    

          {/* Spacer to maintain height at various breakpoints */}
          <div className="h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] xl:h-[480px]"></div>
        </div>
      </div>
    </section>
  );
}
