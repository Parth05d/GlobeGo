import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (formData) => {
    alert("Message sent! We'll get back to you soon.");
    const SubmittedFormData = Object.fromEntries(formData.entries());
    console.log(SubmittedFormData);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 py-16 px-6 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-zinc-400 mt-3 mb-10 text-center max-w-xl">
        Have questions or feedback? We'd love to hear from you. Fill out the
        form below or reach us through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Contact Info */}
        <div className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 rounded-2xl border border-violet-950/40 shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-violet-700" />
              <p>support@worldexplorer.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-violet-700" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-violet-700" />
              <p>123 Global Street, Travel City, Earth</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action={handleSubmit}
          className="bg-gradient-to-tl from-violet-950/30 to-zinc-900/50 rounded-2xl border border-violet-950/40 shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-3 py-2 mb-4 rounded-xl bg-zinc-900 border border-violet-950/40 focus:ring-2 focus:ring-violet-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 mb-4 rounded-xl bg-zinc-900 border border-violet-950/40 focus:ring-2 focus:ring-violet-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-3 py-2 mb-4 rounded-xl bg-zinc-900 border border-violet-950/40 focus:ring-2 focus:ring-violet-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-tl from-violet-950/70 to-zinc-900/50 text-zinc-300 border border-zinc-700/40 font-bold hover:opacity-90 transition"
          >
            Send Message <Send className="inline ml-2" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
