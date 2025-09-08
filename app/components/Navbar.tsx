"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navbarContent = {
  logo: {
    src: "/Images/main-logo.png",
    alt: "OR 1A Logo",
    text: "OR 1A.",
  },
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#early-access" },
    { name: "Features", href: "#key-features" },
    { name: "Blog", href: "#blog" },
    { name: "Newsletter", href: "#newsletter" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  cta: {
    text: "Join Now",
    href: "#early-access",
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handler = () => {
      let current = "#hero";
      for (const nav of navbarContent.navigation) {
        const el = document.querySelector(nav.href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = nav.href;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
    }
  };

  return (
    <nav className="bg-white text-gray-900 z-50 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mt-12">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={navbarContent.logo.src}
                alt={navbarContent.logo.alt}
                width={99}
                height={99}
                className="rounded-[10px] opacity-100"
                style={{
                  width: '99px',
                  height: '99px',
                  top: '18px',
                  left: '79px',
                  borderRadius: '10px',
                  opacity: 1
                }}
              />
              {/* <span className="text-xl font-bold text-gray-900">
                {navbarContent.logo.text}
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=" lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navbarContent.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`${active === item.href ? "text-blue-700" : "text-gray-700"} hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Link
              href={navbarContent.cta.href}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              style={{
                width: '140px',
                height: '46px',
                top: '28px',
                left: '1220px',
                borderRadius: '10px',
                opacity: 1,
                backgroundColor: '#08192B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
              onClick={(e) => smoothScroll(e, navbarContent.cta.href)}
            >
              {navbarContent.cta.text}
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navbarContent.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${active === item.href ? "text-blue-700" : "text-gray-700"} hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              onClick={(e) => {
                smoothScroll(e, item.href);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link
              href={navbarContent.cta.href}
              className="bg-blue-900 hover:bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={(e) => {
                smoothScroll(e, navbarContent.cta.href);
                setIsMenuOpen(false);
              }}
            >
              {navbarContent.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
