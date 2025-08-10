"use client";
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
  background: {
    src: "/Images/Rectangle.png",
    alt: "Blue rectangle background",
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
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {contactContent.header}
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900">
                  {contactContent.title.line1}
                </span>{" "}
                <span className="text-blue-600">
                  {contactContent.title.line2}
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {contactContent.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
              >
                {contactContent.form.button.text}
              </Button>
            </form>
          </div>

          <div className="relative">
            <div className="relative h-full min-h-[600px] -mr-44 lg:-mr-44 bg-[#484AF6] rounded-tl-2xl rounded-tr-2xl">
              <div className="absolute top-6 left-6 w-8 h-8 bg-blue-800 rounded-md transform rotate-45"></div>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-blue-900 rounded-2xl p-8 text-white space-y-8 max-w-md">
                  image.png
                  <h3 className="text-3xl font-bold">
                    {contactContent.contactInfo.title}
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {contactContent.contactInfo.description}
                  </p>
                  <div className="space-y-6">
                    {contactContent.contactInfo.details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <span className="text-2xl">{detail.icon}</span>
                        <span className="text-lg">{detail.text}</span>
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
