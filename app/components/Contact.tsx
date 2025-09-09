"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const contactContent = {
  header: "GET IN TOUCH",
  title: {
    line1: "Contact",
    line2: "Our Team",
  },
  description:
    "Have questions about We Tell Facts? We're here to help you succeed in your aviation journey.",
  form: {
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Enter your Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        placeholder: "Email address",
        type: "email",
        required: true,
      },
      {
        name: "subject",
        label: "Subject",
        placeholder: "Subject",
        type: "text",
        required: true,
        fullWidth: true,
      },
      {
        name: "message",
        label: "Message",
        placeholder: "Write Something",
        type: "textarea",
        required: true,
        fullWidth: true,
      },
    ],
    button: {
      text: "Send Message",
      href: "#contact",
    },
  },
  contactInfo: {
    title: "Contact Info",
    description:
      "Explore our services today and see how we can help you succeed.",
    details: [
      {
        icon: "📍",
        text: "8223 plains, NJ 07076",
      },
      {
        icon: "📞",
        text: "0123456789",
      },
      {
        icon: "✉️",
        text: "kam@gm.com",
      },
      {
        icon: "🕒",
        text: "Live chat available 24/7",
      },
    ],
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-white overflow-hidden pb-0"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-10">
          {/* Left Column - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="text-[#5B42F3] text-sm font-medium uppercase tracking-wider">
                {contactContent.header}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900">
                  {contactContent.title.line1}
                </span>{" "}
                <span className="text-[#5B42F3]">
                  {contactContent.title.line2}
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {contactContent.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    {contactContent.form.fields[0].label}
                  </label>
                  <input
                    type={contactContent.form.fields[0].type}
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.fields[0].placeholder}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    {contactContent.form.fields[1].label}
                  </label>
                  <input
                    type={contactContent.form.fields[1].type}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={contactContent.form.fields[1].placeholder}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {contactContent.form.fields[2].label}
                </label>
                <input
                  type={contactContent.form.fields[2].type}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={contactContent.form.fields[2].placeholder}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {contactContent.form.fields[3].label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={contactContent.form.fields[3].placeholder}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-[#5B42F3] hover:bg-[#5B42F3] text-white font-bold px-8 py-4 rounded-lg text-lg"
              >
                {contactContent.form.button.text}
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info Card */}
          <div className="relative">
            {/* Background Rectangle Image */}
            <div className="">
              <Image
                src="/Images/Rectangle.png"
                alt="Blue rectangle background"
                fill
                className="rounded-tl-2xl ml-80 z-0"
              />
            </div>
            
            {/* Contact Info Card */}
            <div className="relative mt-78 ">
         
            <div className="bg-gray-900 w-[650px] ml-20 mr-[-170px] rounded-2xl p-8 lg:p-12 shadow-xl z-10 absolute top-1/2 right-10 transform -translate-y-1/2">
              {/* Top-left decorative element */}
              <div className="absolute -top-4 -left-4 z-20">
                <Image
                  src="/Images/Rectangle60.png"
                  alt="Top-left decorative element"
                  width={50}
                  height={40}
                  className="object-contain"
                  
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {contactContent.contactInfo.title}
                  </h3>
                  <p className="text-base text-white leading-relaxed">
                    {contactContent.contactInfo.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactContent.contactInfo.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 text-[#5B42F3]">
                        {index === 0 && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </svg>
                        )}
                      </div>
                      <span className="text-white text-base">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
