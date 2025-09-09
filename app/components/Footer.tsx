import Image from "next/image";

const footerContent = {
  logo: {
    src: "/Images/light-logo.png",
    alt: "OR 1A Logo",
  },
  description: "Revolutionary training platform for modern businesses.",
  navigation: {
    navigation: {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "Blog", href: "#blog" },
        { name: "Reviews", href: "#reviews" },
        { name: "Contact", href: "#contact" },
        { name: "FAQs", href: "#faqs" },
      ],
    },
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Free Trial", href: "#trial" },
        { name: "Enterprise", href: "#enterprise" },
        { name: "Demo", href: "#demo" },
        { name: "Download", href: "#download" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Training", href: "#training" },
        { name: "Contact", href: "#contact" },
        { name: "Status", href: "#status" },
        { name: "Documentation", href: "#docs" },
      ],
    },
  },
  social: [
    {
      name: "Facebook",
      src: "/Images/fb1.png",
      alt: "Facebook",
      href: "#facebook",
    },
    {
      name: "X (Twitter)",
      src: "/Images/x1.png",
      alt: "X (Twitter)",
      href: "#twitter",
    },
    {
      name: "YouTube",
      src: "/Images/yt1.png",
      alt: "YouTube",
      href: "#youtube",
    },
  ],
  appDownloads: [
    {
      name: "Google Play",
      src: "/Images/googleplay.png",
      alt: "Get it on Google Play",
      href: "#googleplay",
    },
    {
      name: "App Store",
      src: "/Images/appstore.png",
      alt: "Download on the App Store",
      href: "#appstore",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-28 overflow-hidden">
      <div className="absolute inset-0 z-0 -top-60">
        <Image
          src="/Images/Group.png"
          alt="Footer background pattern"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-16">
          <div className="space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-44 xl:h-44 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src={footerContent.logo.src}
                  alt={footerContent.logo.alt}
                  width={64}
                  height={64}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[163px] xl:h-[163px] rounded-full"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {footerContent.appDownloads.map((app) => (
                <a key={app.name} href={app.href} className="inline-block">
                  <Image
                    src={app.src}
                    alt={app.alt}
                    width={160}
                    height={48}
                    className="h-10 sm:h-12 md:h-14 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-white">
              {footerContent.navigation.navigation.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerContent.navigation.navigation.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-lg sm:text-2xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-white">
              {footerContent.navigation.product.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerContent.navigation.product.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-lg sm:text-2xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-white">
              {footerContent.navigation.support.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerContent.navigation.support.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-lg sm:text-2xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className="flex justify-end space-x-4">
          {footerContent.social.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
